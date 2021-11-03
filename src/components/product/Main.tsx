import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Select,
  Tabs,
  TabList,
  Tab,
  useMediaQuery,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { useStore } from '@contexts/StoreProvider';

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  const { savedItemsCount } = useStore();
  const router = useRouter();
  const [isLargerThan567] = useMediaQuery('(min-width: 567px)');
  return (
    <Box as="main" mx={[0, 4]} h="100%" rounded="md">
      <Flex p={3} pb={0} align="flex-end" justify="space-between" flexWrap="wrap">
        <HStack align="flex-end" mr={5} mb={5}>
          <FormControl w="fit-content">
            <FormLabel textTransform="uppercase" fontSize="x-small" w="fit-content">
              Sort by
            </FormLabel>
            <Select
              minW="fit-content"
              size={isLargerThan567 ? 'sm' : 'xs'}
              rounded="base"
              borderColor="gray.500"
              cursor="pointer"
            >
              <option value="option1">Category</option>
            </Select>
          </FormControl>
          <FormControl w="fit-content">
            <Select
              minW="fit-content"
              size={isLargerThan567 ? 'sm' : 'xs'}
              rounded="base"
              borderColor="gray.400"
              cursor="pointer"
            >
              <option value="option1">Shipping</option>
            </Select>
          </FormControl>
          <FormControl w="fit-content">
            <Select
              minW="fit-content"
              size={isLargerThan567 ? 'sm' : 'xs'}
              rounded="base"
              borderColor="gray.400"
              cursor="pointer"
            >
              <option value="option1">Delivery options</option>
            </Select>
          </FormControl>
        </HStack>
        <Flex align="center">
          <Tabs
            variant="unstyled"
            size="sm"
            mb={5}
            defaultIndex={
              router.pathname === '/store' ? 0 : router.pathname === '/store/saved' ? 1 : undefined
            }
          >
            <TabList bg="blue.50" rounded="md">
              <Tab
                _selected={{
                  color: 'blue.400',

                  rounded: 'base',
                  boxShadow: 'base',
                }}
                onClick={() => router.push('/store')}
                fontSize={isLargerThan567 ? 'sm' : 'xs'}
              >
                Show All
              </Tab>
              <Tab
                _selected={{
                  color: 'blue.400',

                  rounded: 'base',
                  boxShadow: 'base',
                }}
                onClick={() => router.push('/store/saved')}
                fontSize={isLargerThan567 ? 'sm' : 'xs'}
              >
                <p>Saved - {savedItemsCount}</p>
              </Tab>
              <Tab
                _selected={{
                  color: 'blue.400',

                  rounded: 'base',
                  boxShadow: 'base',
                }}
                fontSize={isLargerThan567 ? 'sm' : 'xs'}
              >
                Buy now
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
      </Flex>
      {children}
    </Box>
  );
};

export default Main;
