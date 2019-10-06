import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Connect With Me</h1>
            <p>
                <a href="https://twitter.com/GiovanniFloresE" target="_blank">@GiovanniFloresE</a> on Twitter
            </p>
        </Layout>
    );
}

export default ContactPage;