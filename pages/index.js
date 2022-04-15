import { Fragment } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'

function HomePage(props) {

  const Hero = dynamic(() => import("../components/home-page/hero"));
  const MainContent = dynamic(() => import("../components/home-page/mainContent.js"));
  return (
    <Fragment>
      <Head>
        <title>Victory Cuts</title>
        <link rel="shortcut icon" href='/favicon.png' />
        <meta name="google-site-verification" content="DHrCf6sm6wo9--y00MifwUcrAa_IH3UpUXwVeLNhUcU" />
      </Head>
      <Hero /><MainContent />
      
    </Fragment>
  );
}

export default HomePage;
