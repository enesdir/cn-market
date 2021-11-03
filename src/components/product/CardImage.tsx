import { Icon, Skeleton } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { ReactElement } from 'react';
import { AiOutlineStar } from 'react-icons/ai';

import { ButtonOpaque } from '@components/common/Button/ButtonOpaque';

interface ImageProps {
  productId?: string | number;
  liked?: boolean;
  photo: string;
  caption: string;
}
// TODO:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CardImage = ({ productId, liked, photo, caption }: ImageProps): ReactElement => {
  return (
    <ImageSkeleton isLoaded={!!photo}>
      {photo && (
        <>
          <Image src={photo} alt={caption} layout="fill" objectFit="cover" loading="lazy" />

          {/* TODO: add product average rating data */}
          <RatingButton rightIcon={<Icon as={AiOutlineStar} boxSize={5} />}>5.00</RatingButton>
        </>
      )}
    </ImageSkeleton>
  );
};

const ImageSkeleton = styled(Skeleton)`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: inherit;
  overflow: hidden;
`;

const RatingButton = styled(ButtonOpaque)`
  position: absolute;
  top: 0.4em;
  left: 0.4em;
`;

export default CardImage;
