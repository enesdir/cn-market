import { BoxProps, VStack } from '@chakra-ui/react';
import * as React from 'react';

import { CardBadge } from './CardBadge';

export interface CardProps extends BoxProps {
  isPopular?: boolean;
}

export const CardContainer = (props: CardProps) => {
  const { children, isPopular, ...boxProps } = props;
  return (
    <VStack
      h="100%"
      position="relative"
      px="2"
      pb="2"
      pt="4"
      overflow="hidden"
      shadow="lg"
      maxW="md"
      width="100%"
      borderRadius="lg"
      align="stretch"
      {...boxProps}
    >
      {isPopular && <CardBadge>Popular</CardBadge>}
      {children}
    </VStack>
  );
};
