import classes from './hero.module.css';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image'

function Hero() {
  const router = useRouter()

  const imageUrl = '/lawn.webp'
  return (
    <>
      <Head>
        <link rel='preload' href={imageUrl} as='image' />
      </Head>
      {/* <div className={classes.imageContainer}> */}
      <Image 
      src={imageUrl} 
      width='100vw'
      height='40px'
      quality={100}
      layout='responsive'
      priority={true}
      className={classes.raw} />
{/* </div> */}
      <div className={classes.container}>
        <p className={classes.h1}>
         Lawncare made easy
        </p>
        <p className={classes.h2}>
          We provide the best lawncare service in Pensacola
        </p>
      </div>
      <button className={classes.button} onClick={() => router.push('/contact')} role="button">CONTACT US</button>
    </>
  );
}

export default Hero;
