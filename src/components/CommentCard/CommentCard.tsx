import { Box, Flex, Avatar, Text, Tooltip, useColorModeValue } from '@chakra-ui/react';

interface UserDetails {
  fullName: string;
  photoUrl?: string;
}
export interface CommentCardProps {
  userDetails: UserDetails;
  ownerId: string | number;
  date: Date | string;
  comment: string;
}
export function CommentCard({ comment, userDetails, ownerId, date }: CommentCardProps) {
  return (
    <Flex flexDir="column">
      <Flex flexDir="row">
        <Box>
          <Avatar
            to={`/user/${ownerId}`}
            name={userDetails.fullName}
            src={userDetails.photoUrl}
            size="md"
            showBorder={true}
          />
        </Box>
        <Flex overflowX="hidden" pl={4} flexDir="column" flex={1}>
          <Flex overflowX="hidden">
            <Text noOfLines={2} isTruncated whiteSpace="pre-line" fontWeight="bold">
              {userDetails.fullName}
            </Text>
          </Flex>
          <Flex overflowX="auto" className="unscroll" mt={1}>
            <Tooltip label={date} aria-label="Specific timestamp" placement={'auto-end'}>
              <Text
                userSelect="none"
                whiteSpace="nowrap"
                fontWeight="semibold"
                fontSize="sm"
                color={useColorModeValue('gray.500', 'gray.500')}
              >
                {date}
              </Text>
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
      <Box pl={16} pt={2}>
        <Text fontSize="md" whiteSpace="pre-line">
          {comment}
        </Text>
      </Box>
    </Flex>
  );
}
