'use client';
import styled from 'styled-components';
import { ImageProps } from 'next/image';
import { UnoptimizedImage } from '../Image';

type ImageShape = 'circle' | 'square';
type ShapeImageProps = ImageProps & { shape?: ImageShape };

export const ImageWithShape = styled(UnoptimizedImage)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};
`;

export const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props;

  return <ImageWithShape shape={shape} {...imageProps} />;
};

ShapeImage.defaultProps = {
  shape: 'square',
};

export default ShapeImage;
