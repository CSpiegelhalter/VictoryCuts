import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../../responsive';
import dynamic from 'next/dynamic'

function Layout(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

  const MobileNav = dynamic(() => import("./mobileNav"));
  const MainNavigation = dynamic(() => import("./main-navigation"));
  const Footer = dynamic(() => import("../footer"));

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
