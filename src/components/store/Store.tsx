import { Box, Button, Heading, useBreakpointValue } from '@chakra-ui/react';

import { useStore } from '@/contexts/StoreProvider';

import ProductCard from '@/components/product/ProductCard';
import ProductsGrid from '@/components/product/ProductGrid';

function PopularItemsList() {
  const { products } = useStore();
  return (
    <>
      <Heading fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }} my={2} w={{ base: '100%', md: '90%' }}>
        Explore our best menu items
      </Heading>
      <Box as="section" py="14" px={{ base: '4', md: '8' }}>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </Box>
      <Button variant="solid" bg="gray.700" color="white" my={4} size={useBreakpointValue({ base: 'sm', sm: 'md' })}>
        View All
      </Button>
    </>
  );
}

export default PopularItemsList;
