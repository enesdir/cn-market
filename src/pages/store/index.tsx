import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import LandingLayout from '@/components/LandingLayout';
import { LoadingProduct } from '@/components/Loading/';
import Main from '@/components/product/Main';
// import PopularItemsList from '@components/store/Store';

const PopularItemsList = dynamic(() => import('../../components/store/Store'), {
  suspense: true,
});
const Store = () => {
  return (
    <>
      <LandingLayout logoLabel="E-COMMERCE Site" basket={true} footer={true}>
        <Main>
          <Suspense fallback={<LoadingProduct />}>
            <PopularItemsList />
          </Suspense>
        </Main>
      </LandingLayout>
    </>
  );
};

export default Store;
