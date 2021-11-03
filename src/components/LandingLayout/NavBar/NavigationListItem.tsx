import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

export const NavigationListItem: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box as="li" css={{ listStyle: 'none' }} role="menuitem" {...props}>
      {children}
    </Box>
  );
};
