import { Container } from '@chakra-ui/layout';
import { PropsWithChildren } from 'react';

import Navbar, { NavbarProps } from '@/components/LandingLayout/NavBar';

import Footer from './Footer';

interface ExtraProps {
  footer: boolean;
}
export type LandingLayoutProps = PropsWithChildren<NavbarProps & ExtraProps>;
// interface LandingLayoutProps {

// }
export default function LandingLayout({ logoLabel, basket, children, footer }: LandingLayoutProps) {
  return (
    <>
      <Navbar logoLabel={logoLabel} basket={basket} />
      <Container maxW="7xl" alignItems="center" justifyContent="center" minH="70vh">
        {children}
      </Container>
      {footer && <Footer />}
    </>
  );
}
