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
          <div className={classes.glass}>
        <h1 className={classes.h1}>
          WANT A MANICURED LAWN?<br /><br />WE PROVIDE THE BEST LAWNCARE SERVICE IN PENSACOLA!
        </h1>
    </div>
    <button className={classes.button} role="button">CONTACT US</button>
    </section>
  );
}

export default Hero;
