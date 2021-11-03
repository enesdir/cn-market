import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  VStack,
  Container,
  Collapse,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import NavItem from '@components/LandingLayout/NavBar/NavItem';
import { LogoWithText } from '@components/Logo/';

import { NavigationList } from './NavigationList';

const RightSideItems = dynamic(() => import('./RightSideItems'), {
  suspense: true,
});

const menuitems = [
  {
    id: 1,
    to: '/',
    children: 'Home',
  },
  {
    id: 2,
    to: '/store',
    children: 'Store',
  },
  {
    id: 3,
    to: '/features',
    children: 'Features',
  },
  {
    id: 4,
    to: '/pricing',
    children: 'Pricing',
  },
];

export interface NavbarProps {
  logoLabel: string;
  basket?: boolean;
}
export default function Navbar(props: NavbarProps) {
  const { logoLabel, basket } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="nav"
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      boxShadow={{ base: 'md', md: 'none' }}
    >
      <Container maxWidth="container.xl">
        <Flex h={16} alignItems="center" justifyContent={'space-between'}>
          <IconButton
            size="md"
            variant="ghost"
            aria-label="Toggle Navigation"
            alignItems="center"
            justifyContent="center"
            isActive={isOpen}
            icon={isOpen ? <HiX /> : <HiMenu />}
            display={{ base: 'flex', md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex alignItems="center" justifyContent={'start'}>
            <LogoWithText label={logoLabel} />
          </Flex>
          <Flex alignItems="center" justifyContent={'end'}>
            <NavigationList display={{ base: 'none', md: 'flex' }}>
              <NavItem navitems={menuitems} />
            </NavigationList>
            <Suspense fallback={'loading'}>
              <RightSideItems basket={basket} />
            </Suspense>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <NavigationList pb={4} display={{ md: 'none' }}>
            <VStack as={'nav'} spacing={4} flexDirection="column">
              <NavItem navitems={menuitems} />
            </VStack>
          </NavigationList>
        </Collapse>
      </Container>
    </Box>
  );
}
