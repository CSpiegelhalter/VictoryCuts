import Image from 'next/image';
import Logo from '../layout/logo';
import classes from './footer.module.css';
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'
import Twitter from '../images/twitter.png'


function Footer() {
  return (
    <section className={classes.top}>
      <div className={classes.foot}>
          <h5 className={classes.topHeader}>The best in Pensacola</h5>
          <h1 className={classes.bigHeader}>Request our Services</h1>
          <button className={classes.button} role="button">CONTACT US</button>
          <p className={classes.llc}>@ 2021 Victory Cuts, LLC</p>
          <div className={classes.line}></div>

          
      </div>
      <div className={classes.bottom}>
                <Logo />
                <div className={classes.socialMedia}>
                    <Image className={classes.social} src={Facebook} alt='Facebook' />
                    <Image className={classes.social} src={Instagram} alt='Instagram' />
                    <Image className={classes.social} src={Twitter} alt='Twitter' />
                </div>
          </div>
    </section>
  );
}

export default Footer;
