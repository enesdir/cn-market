import { Box, Flex, Text } from '@chakra-ui/layout';
import { IconType } from 'react-icons';
import { BsInfoCircleFill as InfoIcon } from 'react-icons/bs';

type Props = {
  text: string;
  icon: IconType;
};

export function Module({ text, icon }: Props) {
  const texts = text.split(' ');
  const textA = texts[0];
  const textB = texts[1];

  return (
    <Flex
      align="center"
      justify="space-between"
      minWidth="180px"
      mr="6"
      mb="8"
      px="6"
      py="4"
      rounded="lg"
      cursor="pointer"
      color="gray.500"
      _hover={{
        background: '#fff4da',
        color: 'blackAlpha.900',
        '.info-icon': {
          opacity: 1,
        },
      }}
    >
      <Box as={icon} size="28" />
      <Text fontSize="small" lineHeight="1.1" fontWeight="semibold" wordBreak="break-word">
        {textA} <br /> {textB}
      </Text>
      <Box as={InfoIcon} color="myYellow.300" size="20" className="info-icon" opacity="0" />
    </Flex>
  );
}
