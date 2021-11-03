import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import BasicLayout from '@components/BasicLayout/BasicLayout';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <BasicLayout>
      <Box
        rounded={'2xl'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        p={10}
        h="auto"
        alignItems="center"
        alignContent="center"
      >
        {children}
      </Box>
    </BasicLayout>
  );
}
