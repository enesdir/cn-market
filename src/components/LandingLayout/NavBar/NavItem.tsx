import { useColorModeValue, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

import { NextButtonLink } from '@components/NextButtonLink';

import { NavigationListItem } from './NavigationListItem';

interface NavLinkProps {
  children: ReactNode;
  to: string;
}

function NavLink({ children, to = '/' }: NavLinkProps) {
  const { asPath } = useRouter();
  const isLast = asPath === to;
  const buttoncolor = useColorModeValue('primary.700', 'primary.400');
  return (
    <NavigationListItem>
      <NextButtonLink
        variant="ghost"
        href={to}
        isActive={isLast}
        display="inline-flex"
        alignItems="center"
        fontWeight="600"
        _active={{
          color: buttoncolor,
        }}
        _hover={{
          color: buttoncolor,
        }}
      >
        <Box
          transition="border-color 200ms ease-out 0s"
          borderBottom="2px solid transparent"
          minHeight={{ base: '2rem', md: '4rem' }}
          display="flex"
          alignItems="center"
          as="span"
          _hover={{
            borderColor: 'primary.400',
          }}
        >
          {children}
        </Box>
      </NextButtonLink>
    </NavigationListItem>
  );
}
interface menuitem extends NavLinkProps {
  id: number;
}
interface MenuItemProps {
  navitems: menuitem[];
}

function NavItem({ navitems }: MenuItemProps) {
  const menuItems = navitems.map(navitem => (
    <NavLink key={navitem.id} to={navitem.to}>
      {navitem.children}
    </NavLink>
  ));
  return <React.Fragment>{menuItems}</React.Fragment>;
}
export default NavItem;
