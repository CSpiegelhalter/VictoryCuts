import Image from 'next/image';
// import lawn from '../images/lawn.jpg'
import classes from './hero.module.css';
import { useRouter } from 'next/router';

function Hero() {
  const router = useRouter()
  return (
    <section className={classes.hero}>

      <div className={classes.raw}>
      </div> <div className={classes.glass}>
        <h1 className={classes.h1}>
          WANT A MANICURED LAWN?<br /><br />WE PROVIDE THE BEST LAWNCARE SERVICE IN PENSACOLA!
        </h1>
      </div>
      <button className={classes.button} onClick={() => router.push('/contact')} role="button">CONTACT US</button>

    </section>
  );
}

export default Hero;
