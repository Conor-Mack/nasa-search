import { FC } from "react";
import styled from "styled-components";
import { CenteredElement } from "../utils/styles";
import { CenteredElementProps } from "../utils/types";

interface ImageDimensions {
  width?: string;
  height?: string;
}

interface ImageProps extends ImageDimensions {
  src: string;
  alt?: string;
  center?: boolean;
}

const Image: FC<ImageProps> = ({ src, alt, center, width, height }) => {
  return (
    <Img
      as="img"
      src={src}
      alt={alt}
      title={alt}
      width={width}
      height={height}
      center={center}
    />
  );
};

const Img = styled(CenteredElement)<ImageDimensions>`
  width: ${({ width = "fit-content" }) => width};
  height: ${({ height = "fit-content" }) => height};
  object-fit: cover;
  display: block;
`;

export default Image;
