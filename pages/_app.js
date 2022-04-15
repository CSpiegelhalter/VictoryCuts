import Head from 'next/head';
import dynamic from 'next/dynamic'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const Layout = dynamic(() => import("../components/layout/layout"));
  return (
    <Layout>
      <Head>
      <meta name="google-site-verification" content="DHrCf6sm6wo9--y00MifwUcrAa_IH3UpUXwVeLNhUcU" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
