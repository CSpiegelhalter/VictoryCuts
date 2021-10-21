import Image from 'next/image';
import lawn from '../images/lawn.jpg'
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
     
        <Image
          src={lawn}
          alt='Lawncare Pensacola, Florida'
        />

      <h1 className='lawnservice'>
      Want a manicured lawn?<br /> We provide the best lawncare service in Pensacola!

      </h1>
      
    </section>
  );
}

export default Hero;
