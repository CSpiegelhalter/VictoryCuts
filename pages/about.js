import { Fragment } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'

function About() {
    const Aboutus = dynamic(() => import("../components/abousus.js"));
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <Aboutus />
    </Fragment>
  );
}

export default About;
