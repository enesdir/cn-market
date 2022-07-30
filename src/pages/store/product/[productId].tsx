import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Suspense, useEffect } from 'react';

const Product = dynamic(() => import('@/components/product/Product'), {
  suspense: true,
});
import { ProductType, useStore } from '@/contexts/StoreProvider';

import LandingLayout from '@/components/LandingLayout';
import { LoadingPage } from '@/components/Loading';

export default function ProductPage() {
  const { fetchProducts, isLoading, products, addToCart } = useStore();
  // Get the url parameter (/:id) value
  const router = useRouter();
  const { productId } = router.query;
  useEffect(() => {
    isLoading && fetchProducts!();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const product: ProductType = products!.find((product) => product.id.toString() === productId);
  return (
    <LandingLayout logoLabel="E-COMMERCE Site" basket={true} footer={true}>
      <Suspense fallback={<LoadingPage />}>
        <Product product={product} />
      </Suspense>
    </LandingLayout>
  );
}
