import {
  Box,
  Flex,
  Text,
  Image,
  Input,
  Button,
  Select,
  LinkBox,
  VStack,
  HStack,
  LinkOverlay,
  useNumberInput,
  useToast,
} from '@chakra-ui/react';
import { useContext, ChangeEvent } from 'react';
import { BiTrash as TrashIcon } from 'react-icons/bi';
import { BsHeart as HeartIcon } from 'react-icons/bs';
import { BsHeartFill as HeartIconFill } from 'react-icons/bs';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { useStore, ProductType } from '@contexts/StoreProvider';

import { CartProductMeta } from './CartProductMeta';
import { PriceTag } from './PriceTag';
type Props = {
  product: ProductType;
};

const CartItem = ({ product }: Props) => {
  const toast = useToast();
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput();
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  const { deleteFromCart, toggleSaved, incrementQty, decrementQty } = useStore();
  const subTotal = +product.price * +product.quantity!;

  return (
    <>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
        <CartProductMeta
          name={product.title}
          description={product.category}
          image={product.image}
          isGiftWrapping={false}
        />

        <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
          <VStack spacing={1} w="100px" justify="center" align="center" ml="auto">
            <Button
              size="xs"
              rounded="full"
              {...inc}
              disabled={+product.quantity! === 10}
              onClick={() => incrementQty!(product.id)}
              w="17.5%"
            >
              <FaPlus />
            </Button>
            <Input
              size="sm"
              {...input}
              value={product.quantity}
              readOnly
              pattern="^[-+]?[0-9]\d*(\.\d+)?$"
              textAlign="center"
              border="none"
            />
            <Button
              size="xs"
              rounded="full"
              {...dec}
              disabled={+product.quantity! === 1}
              onClick={() => decrementQty!(product.id)}
              w="17.5%"
            >
              <FaMinus />
            </Button>
          </VStack>
          <PriceTag price={subTotal} currency="GBP" />
          <VStack flexWrap="wrap" mr={2} alignItems="flex-start">
            <Button
              leftIcon={product.isSaved ? <HeartIconFill /> : <HeartIcon />}
              colorScheme="red"
              variant="ghost"
              size="sm"
              onClick={() => {
                toast({
                  title: product.isSaved
                    ? 'Product successfully removed from your saved items'
                    : 'Product successfully added to your saved items',
                  status: 'success',
                  duration: 1500,
                  isClosable: true,
                });
                toggleSaved!(product.id);
              }}
            >
              Save Item
            </Button>
            <Button
              leftIcon={<TrashIcon />}
              colorScheme="red"
              variant="ghost"
              size="sm"
              onClick={() => deleteFromCart!(product.id)}
            >
              Remove Item
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

export default CartItem;
