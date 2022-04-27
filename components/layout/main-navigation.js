import Link from 'next/link';

import Logo from './greenLogo';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link replace={true} href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link replace={true} href='/'>Home</Link>
          </li>
          <li>
            <Link replace={true} href='/about'>About</Link>
          </li>
          <li>
            <Link replace={true} href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
