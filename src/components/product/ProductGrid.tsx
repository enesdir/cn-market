import { SimpleGrid } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ProductsGrid = ({ children }: Props) => {
  return (
    <SimpleGrid w="100%" minChildWidth="320px" spacing={6}>
      {children}
    </SimpleGrid>
  );
};

export default ProductsGrid;
