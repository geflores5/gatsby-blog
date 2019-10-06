import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>H</h1>
            <h2>1</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link> </p>
        </Layout>
    );
}

export default IndexPage;