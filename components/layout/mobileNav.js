import Link from 'next/link';

import Logo from './logo';
import classes from './mobileNav.css';

function MobileNav() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
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
      </nav>
    </header>
  );
}

export default MobileNav;
