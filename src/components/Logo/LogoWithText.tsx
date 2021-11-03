import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { Logo } from '@components/Logo/Logo';

interface Props {
  label: string;
}
export function LogoWithText({ label }: Props) {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Logo boxSize="3em" />
      <Heading
        ml="2"
        fontSize="lg"
        fontWeight="bold"
        display={{ base: 'none', md: 'flex' }}
        color={useColorModeValue('gray.600', 'gray.50')}
      >
        {label}
      </Heading>
    </Flex>
  );
}
