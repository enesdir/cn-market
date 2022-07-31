import { Badge, HStack, Icon, StackProps, Text } from '@chakra-ui/react';
import { ElementType, ReactElement } from 'react';

interface IconPairProps extends StackProps {
  icon: ElementType;
  badgeText: string;
  iconPairText: string;
}

export const IconPair = ({ icon, iconPairText, badgeText, ...props }: IconPairProps): ReactElement => (
  <HStack textStyle="labelLight" align="center" spacing={2} {...props}>
    <Icon as={icon} boxSize={6} />
    <Text>{iconPairText}</Text>
    <Text> : </Text>
    <Badge>{badgeText}</Badge>
  </HStack>
);
