import classes from './logo.module.css';
import Image from 'next/image';
import myLogo from '../../public/logo.png'

function Logo() {
  return (
  <img
    src= {'../../logo.png'}
    alt='Lawncare Pensacola, Florida'
    width={75}
    height={75}
  />
  );
}

export default Logo;
