import { Box, Flex, Heading, HStack, Stack, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';

import { useStore } from '@/contexts/StoreProvider';

import CartItem from '@/components/cart/CartItem';
import { CartOrderSummary } from '@/components/cart/CartOrderSummary';
import LandingLayout from '@/components/LandingLayout';
import { NextChakraLink } from '@/components/NextChakraLink';

function Cart() {
  const { products } = useStore();
  const cartItems = products?.filter((product) => product.inCart === true);
  return (
    <LandingLayout logoLabel="E-COMMERCE Site" basket={false} footer={true}>
      <Box maxW={{ base: '3xl', lg: '7xl' }} mx="auto" px={{ base: '8', md: '12' }} py={{ base: '8', md: '12' }}>
        <Stack direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }} spacing={{ base: '8', md: '16' }}>
          <Stack spacing={{ base: '8', md: '10' }} flex="2">
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({cartItems.length} products)
            </Heading>

            <Stack spacing="6">
              {cartItems!.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <NextChakraLink href="/store" color={mode('cyan.500', 'cyan.200')}>
                Continue shopping
              </NextChakraLink>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </LandingLayout>
  );
}

export default Cart;
