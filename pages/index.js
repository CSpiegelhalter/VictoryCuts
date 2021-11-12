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
      </Head>
      <Hero /><MainContent />
      
    </Fragment>
  );
}

export default HomePage;
