import { Box, Flex, Heading, Stat, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

import { IconPair } from '@/components/IconPair/';
import { ProductType } from '@/features/store';

import { CardContainer } from './CardContainer';
import CardFooter from './CardFooter';
import CardImage from './CardImage';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <CardContainer rounded={{ sm: 'xl' }}>
        <CardImage productId={product.id} liked={product.isSaved} photo={product.image} caption={product.title} />
        <VStack as="section" flexGrow={1} align="stretch" spacing={2} p={2}>
          <Link key={product.id} href={`/store/product/${product.id}`}>
            <a>
              <Heading as="h3" size="md">
                {product.title}
              </Heading>
              <Text fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }} color="gray.500">
                {product.description}
              </Text>
            </a>
          </Link>
          <Flex flex={1}>
            <Box mt="auto">
              <IconPair icon={HiOutlineOfficeBuilding} mb={1} iconPairText="Category" badgeText={product.category} />
              <IconPair icon={HiOutlineOfficeBuilding} mb={1} iconPairText="Company" badgeText="Awesome Company" />
            </Box>
          </Flex>
        </VStack>
        <Stat alignItems="center" justifyContent="center">
          <StatLabel fontSize={{ base: 'md', md: 'xl' }}>Price</StatLabel>
          <StatNumber fontSize={{ base: 'xl', md: '2xl' }} color="primary">
            $ {product.price}
          </StatNumber>
        </Stat>
        <CardFooter product={product} />
      </CardContainer>
    </>
  );
};

export default ProductCard;
