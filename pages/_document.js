import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
        <meta name="google-site-verification" content="DHrCf6sm6wo9--y00MifwUcrAa_IH3UpUXwVeLNhUcU" />
        </Head> 
        
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
