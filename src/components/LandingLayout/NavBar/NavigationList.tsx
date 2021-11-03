import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

export const NavigationList: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex as="ul" role="menubar" className="main-menubar" {...props}>
      {children}
    </Flex>
  );
};
