import { Fragment } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'
import Hero from "../components/home-page/hero"
import classes from '../styles/index.module.css'

function HomePage(props) {

  const MainContent = dynamic(() => import("../components/home-page/mainContent.js"));
  return (
    <Fragment>
      <Head>
        <title>Victory Cuts</title>
        <link rel="shortcut icon" href='/favicon.ico' />
        <meta name="google-site-verification" content="DHrCf6sm6wo9--y00MifwUcrAa_IH3UpUXwVeLNhUcU" />
      </Head>
      <div className={classes.container}>
        <Hero />
        <MainContent />
      </div>
    </Fragment>
  );
}

export default HomePage;
