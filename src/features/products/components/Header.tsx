import { Avatar, Box, Button, chakra, Flex, HStack, Link } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

import { Logo } from '@/components/Logo';
import { useStore } from '@/features/store';

import SearchBar from './SearchBar';

// Give the components chakra props
export const ShoppingCart = chakra(FaShoppingCart);

const Header = () => {
  const { cartItemCount } = useStore();
  return (
    <Flex
      as="header"
      direction="column"
      height={['120px', 'fit-content']}
      px={[3, null]}
      position="fixed"
      top={0}
      zIndex={10}
      w="100%"
      bg="white"
      boxShadow="base"
    >
      <Flex height="65px" align="center" px={[null, 2]} py={[7, 9]} justify={['space-between', null]}>
        <Flex align="center">
          <Link to="/" _hover={{ textDecoration: 'none' }}>
            <Logo />
          </Link>
        </Flex>
        <SearchBar display={['none', 'block']} />
        <Flex justify="space-between" align="center">
          <HStack spacing={[3, 5]}>
            <Link to={location.pathname === '/login' ? '/register' : '/login'} _hover={{ textDecoration: 'none' }}>
              <Button
                height={[8, 9]}
                minW={[8, 9]}
                fontSize={['sm', 'md']}
                variant="outline"
                borderColor="appBlue.400"
                borderRadius="0.3rem"
                color="appBlue.400"
                _hover={{
                  bg: 'appBlue.400',
                  color: 'white',
                }}
                _active={{
                  bg: 'appBlue.500',
                  color: 'white',
                }}
              >
                {location.pathname === '/login' ? 'Sign Up' : 'Sign In'}
              </Button>
            </Link>
            <Box></Box>
          </HStack>
          <Avatar
            ml={cartItemCount! > 0 ? [5, 7] : [3, 5]}
            width={[7, 8]}
            height={[7, 8]}
            src="https://bit.ly/broken-link"
            cursor="pointer"
          />
        </Flex>
      </Flex>
      <SearchBar display={['block', 'none']} />
    </Flex>
  );
};

export default Header;
