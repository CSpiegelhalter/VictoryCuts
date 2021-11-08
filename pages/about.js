import { Fragment } from 'react';
import Head from 'next/head';

import Aboutus from '../components/abousus.js';

function About() {
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
