import { Button, Flex, Heading, Icon, Text, useBreakpointValue, useToast, VStack } from '@chakra-ui/react';
import { HiHeart, HiOutlineHeart, HiStar } from 'react-icons/hi';

import { ProductType, useStore } from '@/contexts/StoreProvider';

interface Props {
  product: ProductType;
}
function PopularItem({ product }: Props) {
  const toast = useToast();
  const { addToCart, toggleSaved } = useStore();
  return (
    <Flex
      flexDirection="column"
      rounded="md"
      maxWidth={{ base: '220px', md: '280px' }}
      bg="white"
      borderWidth={1}
      boxShadow="md"
      mx={2}
      my={4}
    >
      <Flex
        height={{ base: '120px', md: '160px' }}
        backgroundImage={`linear-gradient(to right, rgb(70, 70, 72), rgba(25, 23, 23, 0.3) 30%), url(${product.image})`}
        backgroundSize="cover"
        backgroundPosition="center"
        roundedTop="md"
      ></Flex>
      <VStack width="100%" align="start" spacing={3} py={4} px={4}>
        <Flex justifyContent="space-between" align="center" w="100%">
          <Heading color="gray.700" fontWeight="bold" fontSize={{ base: 'md', md: 'xl' }}>
            {product.title}
          </Heading>
          <Text align="center" fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium">
            <span role="img" aria-label="Star Icon">
              <Icon as={HiStar} fontSize="md" color="secondary.500" />
            </span>
            {Math.floor(Math.random() * 10) + 1}
          </Text>
        </Flex>
        <Text w="90%" isTruncated fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }} color="gray.500">
          {product.description}
        </Text>
        <Heading fontSize={{ base: 'md', md: 'xl' }}>£ {product.price}</Heading>
        <Flex justifyContent="space-between" align="center" w="100%">
          <Button
            size={useBreakpointValue({ base: 'sm', sm: 'md' })}
            width="100%"
            mr={4}
            colorScheme="red"
            border={product.isSaved ? 'none' : '1px solid'}
            onClick={() => {
              addToCart!(product);
            }}
            disabled={product.inCart ? true : false}
          >
            {product.inCart ? 'Added to Cart' : 'Add to Cart'}
          </Button>
          <Button
            // opacity={product.isSaved ? 1 : [1, 0]}
            className="btn"
            variant="outline"
            height={9}
            minW={9}
            w={9}
            fontSize="lg"
            px={2}
            borderRadius="full"
            border={product.isSaved ? 'none' : '1px solid'}
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
            {product.isSaved ? (
              <Icon as={HiHeart} color="red.900" fontSize={{ base: 'md', md: 'lg' }} />
            ) : (
              <Icon as={HiOutlineHeart} color="teal.900" fontSize={{ base: 'md', md: 'lg' }} />
            )}
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
}

export default PopularItem;
