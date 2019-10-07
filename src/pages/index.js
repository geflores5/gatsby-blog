import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Simple Gatbsy Blog</h1>
            <h3>Maintained with Contentful</h3>
        </Layout>
    );
}

export default IndexPage;