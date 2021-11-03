import { Image, ImageProps } from '@chakra-ui/react';
import React from 'react';

export type Props = ImageProps;

export function Logo(props: Props) {
  const { ...imageProps } = props;
  return (
    <React.Fragment>
      <Image src="/logo.png" alt="CN AIO Logo" {...imageProps} />
    </React.Fragment>
  );
}
