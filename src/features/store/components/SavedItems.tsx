import { Heading, Text } from '@chakra-ui/react';

import ProductsGrid from '@/features/products/components/ProductGrid';
import { PopularItem, useStore } from '@/features/store/';

function SavedItems() {
  const { products } = useStore();
  const savedProducts = products?.filter((product) => product.isSaved === true);
  return (
    <>
      <Heading fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }} my={2} w={{ base: '100%', md: '90%' }}>
        Saved items
      </Heading>
      <ProductsGrid>
        {savedProducts?.length === 0 ? (
          <Text>No saved items</Text>
        ) : (
          savedProducts!.map((product) => <PopularItem key={product.id} product={product} />)
        )}
      </ProductsGrid>
    </>
  );
}

export default SavedItems;
