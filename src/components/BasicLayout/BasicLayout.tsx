import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props extends FlexProps {
  children: ReactNode;
}
export default function BasicLayout(props: Props) {
  const { children, ...flexProps } = props;
  return (
    <Flex
      minH="100vh"
      w="full"
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
      {...flexProps}
    >
      {children}
    </Flex>
  );
}
