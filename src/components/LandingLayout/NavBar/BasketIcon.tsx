import { chakra, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';

import { useStore } from '@/contexts/StoreProvider';

export default function BasketIcon() {
  const { cartItemCount } = useStore();
  const router = useRouter();
  return (
    <>
      <IconButton
        aria-label="View Cart"
        rounded="xl"
        mr="0.5rem"
        variant="ghost"
        boxShadow="md"
        onClick={() => router.push('/store/cart')}
        size={useBreakpointValue({ base: 'sm', md: 'md' })}
        icon={
          <>
            <Icon as={HiOutlineShoppingCart} fontSize={{ base: 'sm', md: 'lg' }} />
            <chakra.span
              pos="absolute"
              top="-1px"
              right="-1px"
              px={2}
              py={1}
              fontSize="xs"
              fontWeight="semibold"
              lineHeight="none"
              color="white"
              transform="translate(30%,-35%)"
              bg="primary.500"
              rounded="full"
            >
              {cartItemCount}
            </chakra.span>
          </>
        }
      />
    </>
  );
}
