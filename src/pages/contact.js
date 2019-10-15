import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import gitcat from '../images/github.png'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Connect with Me</h1>
            <p>Email: geflores5@gmail.com</p>
            <p>
                <a href="https://github.com/geflores5" target="_blank" >
                    <img src={gitcat} alt="geflores5"/>
                </a>
            </p>
        </Layout>
    );
}

export default ContactPage;