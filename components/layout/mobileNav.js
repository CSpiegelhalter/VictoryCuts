import Link from 'next/link';
import { useState } from 'react';

import Logo from './logo';
import { MenuToggle } from './menuToggle';
import classes from './mobileNav.module.css';

function MobileNav() {

    const [isOpen, setOpen] = useState(false)
  return (
    <div className={classes.header}>
        
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <MenuToggle className={classes.menu} isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && <div>
        <ul>
        <li>
            <Link href='/about'>Home</Link>
          </li>
          <li>
            <Link href='/about'>Reviews</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <Link href='/about'>Blog</Link>
          </li>
        </ul>
      </div>}
    </div>
    
  );
}

export default MobileNav;
