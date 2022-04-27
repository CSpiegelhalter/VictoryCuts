import { Fragment } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'

function About() {
    const Aboutus = dynamic(() => import("../components/abousus.js"));
  return (
    <Fragment>
      <Head>
        <title>About us</title>
        <meta name='Company information' content='Information about our Lawncare services. We go into exactly what our lawncare services stands for, what we believe in, and what we find important.' />
        <link rel="shortcut icon" href='/favicon.ico' />
      </Head>
      <Aboutus />
    </Fragment>
  );
}

export default About;
