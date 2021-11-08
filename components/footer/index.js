import Image from 'next/image';
import Logo from '../layout/logo';
import classes from './footer.module.css';
import { useRouter } from 'next/router';

function Footer() {
    const router = useRouter()
  return (
    <section className={classes.top}>
      <div className={classes.foot}>
          <h5 className={classes.topHeader}>The best in Pensacola</h5>
          <h1 className={classes.bigHeader}>Request our Services</h1>
          <button className={classes.button} onClick={() => router.push('/contact')}  role="button">CONTACT US</button>
          <p className={classes.llc}>@ 2021 Victory Cuts, LLC</p>
          <div className={classes.line}></div>

          
      </div>
      <div className={classes.bottom}>
                <Logo />
                <div className={classes.socialMedia}>
                    <img className={classes.social} src={'../../facebook.png'} alt='Facebook' />
                    <img className={classes.social} src={'../../instagram.png'} alt='Instagram' />
                    <img className={classes.social} src={'../../twitter.png'} alt='Twitter' />
                </div>
          </div>
    </section>
  );
}

export default Footer;
