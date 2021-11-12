import { Fragment } from 'react';
import Head from 'next/head';
import MainContent from '../components/home-page/mainContent.js';
import Hero from '../components/home-page/hero';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Victory Cuts</title>
        <meta
          name='description'
          content='Lawncare, Lawn services, manicured lawn'
        />
      </Head>
      <Hero /><MainContent />
      
    </Fragment>
  );
}

export default HomePage;
