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
        <meta
          name='description'
          content='Lawncare, Lawn services, manicured lawn. Company that specializes in lawn care services. We are the best in Pensacola, FL!'
        />
        <meta name="google-site-verification" content="DHrCf6sm6wo9--y00MifwUcrAa_IH3UpUXwVeLNhUcU" />
        <link rel="shortcut icon" href='/favicon.png' />
      </Head>
      <Hero /><MainContent />
      
    </Fragment>
  );
}

export default HomePage;
