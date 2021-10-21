import classes from './logo.module.css';
import Image from 'next/image';
import myLogo from '../images/logo.png'

function Logo() {
  return (
  <Image
    src= {myLogo}
    alt='Lawncare Pensacola, Florida'
    width={75}
    height={75}
  />
  );
}

export default Logo;
