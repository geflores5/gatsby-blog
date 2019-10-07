import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Connect With Me</h1>
            <p>Email: geflores5@gmail.com</p>
            <p>
                <a href="https://github.com/geflores5" target="_blank" >
                    github
                </a>
            </p>
        </Layout>
    );
}

export default ContactPage;