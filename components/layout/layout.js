import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../../responsive';
import MobileNav from './mobileNav';
import MainNavigation from './main-navigation';
import Footer from '../footer';

function Layout(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile})


  return (
    <Fragment>
      {!isMobile && <MainNavigation />}
      {isMobile && <MobileNav />}
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
