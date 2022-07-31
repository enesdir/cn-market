/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useToast } from '@chakra-ui/react';
import { createContext, ReactNode, useEffect, useState } from 'react';

import type { ProductType } from '@/features/store/';

import { useClient } from '@/utils/useClient';

import seed from './products.json';

type ContextType = {
  products?: ProductType[];
  cartItemCount?: number;
  totalPrice?: number;
  savedItemsCount?: number;
  addToCart?: (product: ProductType) => void;
  deleteFromCart?: (id: number | string) => void;
  setQuantity?: (qty: string, id: number | string) => void;
  decrementQty?: (id: number | string) => void;
  incrementQty?: (id: number | string) => void;
  toggleSaved?: (id: number | string) => void;
  fetchProducts?: () => Promise<void>;
  isLoading?: boolean;
};

// Create context
export const StoreContext = createContext<ContextType>({});

export function useStore(): ContextType {
  const context = useClient(StoreContext);
  return context;
}
type StoreProviderProps = {
  children: ReactNode;
};
// Provider component
export const StoreProvider = ({ children }: StoreProviderProps) => {
  const toast = useToast();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [savedItemsCount, setSavedItemsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async (): Promise<ProductType[]> => {
    return await (await fetch('https://fakestoreapi.com/products')).json();
  };
  // Fetch products
  const fetchProducts = async () => {
    //const res = await fetch('https://fakestoreapi.com/products').json();
    const products: ProductType[] = seed;
    setProducts(products);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    // Get products in cart
    const productsInCart = products.filter((product) => product.inCart === true);
    const productPrices = productsInCart.map((product) => +product.price * +product.quantity!);
    setTotalPrice(productPrices.reduce((a, b) => a + b, 0));
    setCartItemCount(productsInCart.length);
    // Get saved products
    const savedProducts = products.filter((product) => product.isSaved === true);
    setSavedItemsCount(savedProducts.length);
  }, [products]);

  const toggleSaved = (id: string | number) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === id ? { ...prevProduct, isSaved: !prevProduct.isSaved } : prevProduct
      )
    );
  };

  const addToCart = (product: ProductType) => {
    toast({
      title: 'Product successfully added to your cart',
      status: 'success',
      duration: 1500,
      isClosable: true,
    });
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === product.id ? { ...prevProduct, quantity: 1, inCart: true } : prevProduct
      )
    );
  };

  const deleteFromCart = (id: number | string) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) => (prevProduct.id === id ? { ...prevProduct, inCart: false } : prevProduct))
    );
  };

  const setQuantity = (qty: string, id: number | string) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) => (prevProduct.id === id ? { ...prevProduct, quantity: qty } : prevProduct))
    );
  };

  const decrementQty = (id: number | string) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === id ? { ...prevProduct, quantity: +prevProduct.quantity! - 1 } : prevProduct
      )
    );
  };

  const incrementQty = (id: number | string) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === id ? { ...prevProduct, quantity: +prevProduct.quantity! + 1 } : prevProduct
      )
    );
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        cartItemCount,
        totalPrice,
        savedItemsCount,
        addToCart,
        deleteFromCart,
        setQuantity,
        incrementQty,
        decrementQty,
        toggleSaved,
        fetchProducts,
        isLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

declare global {
  interface ObjectConstructor {
    filter: (obj: any, predicate: any) => any;
  }
}
// Custom function to filter objects
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => Object.assign(res, { [key]: obj[key] }), {});
