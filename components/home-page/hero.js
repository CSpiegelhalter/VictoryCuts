import classes from './hero.module.css';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image'
import dynamic from 'next/dynamic';
import imageUrl from '../../public/lawn.webp'
import mobileImageUrl from '../../public/mobileHero.webp'

function Hero() {
  const router = useRouter()
 
  return (
    <>
      <Head>
        <link rel='preload' href={'../../public/lawn.webp'} as='image' />
      </Head>
      <div className={classes.imageContainer}>
      <Image 
      className={classes.heroImage}
      alt='Beautiful grass with morning-dew resting on top'
      src='/lawn.webp' 
      quality={100}
      layout='fill'
      priority={true}
       />
        <Image 
        className={classes.mobileHeroImage}
      alt='Beautiful grass with morning-dew resting on top'
      src='/mobileHero.webp'
      quality={100}
      layout='fill'
      priority={true}
       />
</div>
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
