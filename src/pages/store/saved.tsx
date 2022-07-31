// import { HStack, Text, Tag } from '@chakra-ui/react';
// import dynamic from 'next/dynamic';
// import { useContext } from 'react';

// import { searchTags } from '../../mockDB/db';
import { AnimatePresence } from 'framer-motion';

import LandingLayout from '@/components/LandingLayout';
import Main from '@/features/products/components/Main';
// import LoadingPage from '@components/LoadingPage';
// import Main from '@components/product/Main';
// import ProductsGrid from '@components/product/ProductGrid';
import { SavedItems, useStore } from '@/features/store';

const StoreSaved = () => {
  const { isLoading } = useStore();

  return (
    <>
      <LandingLayout logoLabel="E-COMMERCE Site" basket={true} footer={true}>
        <Main>
          <AnimatePresence>
            <SavedItems />
          </AnimatePresence>
        </Main>
      </LandingLayout>
    </>
  );
};

export default StoreSaved;
