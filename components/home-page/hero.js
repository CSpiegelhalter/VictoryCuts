import Image from 'next/image';
import lawn from '../images/lawn.jpg'
import classes from './hero.module.css';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../../responsive';
import MobileGlass from './mobileGlass';

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile})

  return (
    <section className={classes.hero}>
     
        <Image
          src={lawn}
          alt='Lawncare Pensacola, Florida'
        />
      {!isMobile && <div className={classes.glass}>
        <h1 className='lawnservice'>
          Want a manicured lawn?<br /><br /> We provide the best lawncare service in Pensacola!
        
        </h1>
      </div>}
      {isMobile && <MobileGlass />}
    </section>
  );
}

export default Hero;
