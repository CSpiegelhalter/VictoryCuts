import { Fragment } from 'react';
import Head from 'next/head';
import MainContent from '../components/home-page/mainContent';
import Hero from '../components/home-page/hero';
// import { getFeaturedPosts } from '../lib/posts-util';

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

// export function getStaticProps() {
//   const featuredPosts = getFeaturedPosts();

//   return {
//     props: {
//       posts: featuredPosts,
//     },
//   };
// }

export default HomePage;
