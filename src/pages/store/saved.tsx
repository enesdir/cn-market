// import { HStack, Text, Tag } from '@chakra-ui/react';
// import dynamic from 'next/dynamic';
// import { useContext } from 'react';

// import { searchTags } from '../../mockDB/db';
import { AnimatePresence, LazyMotion } from 'framer-motion';

import LandingLayout from '@components/LandingLayout';
import Navbar from '@components/LandingLayout/NavBar';
import Main from '@components/product/Main';
import SavedItems from '@components/store/SavedItems';
// import LoadingPage from '@components/LoadingPage';
// import Main from '@components/product/Main';
// import ProductsGrid from '@components/product/ProductGrid';
import { StoreProvider, useStore } from '@contexts/StoreProvider';

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
