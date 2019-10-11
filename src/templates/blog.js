import React from 'react';
import { graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import Layout from '../components/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';

export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            id
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
            body {
                json
            }
        }
    }
`

const Blog = (props) => {
    const disqusShortname = process.env.GATSBY_DISQUS_NAME;
    const disqusConfig = {
        identifier: props.data.contentfulBlogPost.id,
        title: props.data.contentfulBlogPost.title
    }

    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />      
        </Layout>
    );
}

export default Blog;