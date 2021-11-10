import Link from 'next/link';
import { useState } from 'react';
import Router from 'next/router';
import Logo from './logo';
import { MenuToggle } from './menuToggle';
import classes from './mobileNav.module.css';

function MobileNav() {

    const [isOpen, setOpen] = useState(false)


    
    function close() {
      // e.preventdefault()
      console.log(isOpen)
      // if (isOpen == false) {
      //   setOpen(!isOpen)
      // }
      setOpen(!isOpen)
    }

    Router.events.on('routeChangeStart', close);
  return (
    <div className={classes.header}>
        
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <MenuToggle className={classes.menu} isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && <div className={classes.navv}>
        <ul>
        <li>
            <Link href='/'  onClick={() => close()}>Home</Link>
          </li>
          {/* <li>
            <Link href='/about'>Reviews</Link>
          </li> */}
          <li>
            <Link href='/about' onClick={() => setOpen(!isOpen)}>About</Link>
          </li>
          <li>
            <Link href='/contact' onClick={() => setOpen(!isOpen)}>Contact</Link>
          </li>
          {/* <li>
            <Link href='/about'>Blog</Link>
          </li> */}
        </ul>
      </div>}
    </div>
    
  );
}

export default MobileNav;
