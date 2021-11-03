/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Flex,
  FlexProps,
  Icon,
  Button,
  useBreakpointValue,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';

import { useStore, ProductType } from '@contexts/StoreProvider';

interface CardFooterProps extends FlexProps {
  product: ProductType;
}

export default function CardFooter({ product, ...flexProps }: CardFooterProps) {
  const { addToCart, toggleSaved } = useStore();
  const toast = useToast();
  return (
    <Flex justifyContent="space-between" align="center" w="100%" {...flexProps}>
      <Button
        size={useBreakpointValue({ base: 'sm', sm: 'md' })}
        width="100%"
        mr={4}
        colorScheme="red"
        border={!product.inCart && product.isSaved ? 'none' : '1px solid'}
        onClick={() => {
          addToCart!(product);
        }}
        disabled={product.inCart ? true : false}
      >
        {product.inCart ? 'Added to Cart' : 'Add to Cart'}
      </Button>
      <Button
        variant="outline"
        height={9}
        minW={9}
        w={9}
        fontSize="lg"
        px={2}
        borderRadius="full"
        border={product.isSaved ? 'none' : '1px solid'}
        onClick={() => {
          toast({
            title: product.isSaved
              ? 'Product successfully removed from your saved items'
              : 'Product successfully added to your saved items',
            status: 'success',
            duration: 1500,
            isClosable: true,
          });
          toggleSaved!(product.id);
        }}
      >
        {product.isSaved ? (
          <Icon as={HiHeart} color="red.800" fontSize={{ base: 'md', md: 'lg' }} />
        ) : (
          <Icon
            as={HiOutlineHeart}
            color={useColorModeValue('teal.900', 'teal.50')}
            fontSize={{ base: 'md', md: 'lg' }}
          />
        )}
      </Button>
    </Flex>
  );
}
