import {
  Flex,
  Box,
  Badge,
  Button,
  Collapse,
  Heading,
  HStack,
  Tag,
  Stack,
  StackDivider,
  Text,
  VStack,
  useDisclosure,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';

import { CommentCard, CommentCardProps } from '@components/CommentCard';
import CardFooter from '@components/product/CardFooter';
import { ProductType } from '@contexts/StoreProvider';

const comments: CommentCardProps[] = [
  {
    ownerId: 1,
    comment: 'Lorem ipsum',
    date: new Date('2021-09-18T16:39:22.184Z').toLocaleString(),
    userDetails: { fullName: 'Random' },
  },
  {
    ownerId: 2,
    comment: 'Lorem ipsum',
    date: new Date('2021-08-18T16:39:22.184Z').toLocaleString(),
    userDetails: { fullName: 'Next Random' },
  },
];
interface ProductProps {
  product: ProductType;
}
import { useStore } from '@contexts/StoreProvider';

export default function Product({ product }: ProductProps) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box p={3}>
      <Breadcrumb
        fontSize="sm"
        spacing="8px"
        mb={6}
        color="gray.500"
        separator={<FaAngleRight color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Product</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box>
        <Stack direction={{ base: 'column', smallTablet: 'row' }} spacing={4} m={2} mb={8}>
          <Flex align="center" justify="center" w="420px" h="420px" m="auto">
            <Image src={product?.image} width="420px" height="420px" objectFit="contain" />
          </Flex>
          <Box>
            <Heading fontSize="2xl" mb={4}>
              {product?.title}
            </Heading>
            <Flex align="center" mb={3}>
              <Text ml={1} fontSize="sm">
                256 Ratings
              </Text>
            </Flex>
            <Flex mb={2}>
              <Text mr={2}>Size:</Text>{' '}
              <Tag bg="blackAlpha.200" borderRadius="none" mx={1}>
                S
              </Tag>
              <Tag bg="blackAlpha.200" borderRadius="none" mx={1}>
                M
              </Tag>
              <Tag bg="blackAlpha.200" borderRadius="none" mx={1}>
                L
              </Tag>
              <Tag bg="blackAlpha.200" borderRadius="none" mx={1}>
                XL
              </Tag>
            </Flex>
            <Flex align="center" mb={3}>
              <Text fontSize="2xl" fontWeight="bold">
                ${product?.price}{' '}
                <Box as="span" textDecoration="line-through" color="blackAlpha.500" fontSize="lg">
                  {product?.id === 1 ||
                  product?.id === 4 ||
                  product?.id === 7 ||
                  product?.id === 10 ||
                  product?.id === 12 ||
                  product?.id === 16 ||
                  product?.id === 19
                    ? +product?.price * 2
                    : null}
                </Box>
              </Text>
              <Badge ml={4} h="fit-content" textTransform="uppercase" colorScheme="green">
                {product?.id === 1 ||
                product?.id === 4 ||
                product?.id === 7 ||
                product?.id === 10 ||
                product?.id === 12 ||
                product?.id === 16 ||
                product?.id === 19
                  ? '-50%'
                  : null}
              </Badge>
            </Flex>
            <CardFooter product={product} w="200px" />
          </Box>
        </Stack>
        <Box boxShadow="base" rounded="md" border="1px solid" borderColor="gray.200" p={3}>
          <Heading as="h3" fontSize="2xl" mb={2}>
            Product Details
          </Heading>
          <Text>{product?.description}</Text>
          <Flex justify="flex-end"></Flex>
        </Box>
        <Box
          boxShadow="base"
          rounded="md"
          border="1px solid"
          borderColor="gray.200"
          p={3}
          onClick={onToggle}
        >
          <Heading as="h3" fontSize="2xl" mb={2}>
            Reviews({comments.length})
          </Heading>

          <Collapse in={isOpen} animateOpacity>
            {comments.map((comment, i) => (
              <CommentCard
                key={i}
                comment={comment.comment}
                ownerId={comment.ownerId}
                userDetails={comment.userDetails}
                date={comment.date}
              />
            ))}
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
}
