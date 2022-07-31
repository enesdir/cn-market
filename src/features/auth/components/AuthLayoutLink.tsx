import { useColorModeValue } from '@chakra-ui/system';

import { NextChakraLink, NextChakraLinkProps } from '@/components/NextChakraLink';

export const AuthLayoutLink = (props: NextChakraLinkProps) => (
  <NextChakraLink
    fontWeight="semibold"
    fontSize="sm"
    color={useColorModeValue('blue.500', 'blue.200')}
    href={props.href}
    _hover={{ color: useColorModeValue('blue.600', 'blue.300') }}
    display={{ base: 'block', sm: 'inline' }}
  >
    {props.children}
  </NextChakraLink>
);
