import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../../responsive';
import MobileNav from './mobileNav';
import MainNavigation from './main-navigation';

function Layout(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile})


  return (
    <Fragment>
      {!isMobile && <MainNavigation />}
      {isMobile && <MobileNav />}
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
