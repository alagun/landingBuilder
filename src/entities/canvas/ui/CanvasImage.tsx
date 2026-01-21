import { Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

import { CanvasElement } from "../model/types";

interface ICanvasImageProps {
  element: CanvasElement & { type: 'image'; src: string };
}

export const CanvasImage = ({ element }: ICanvasImageProps) => {
  const [image] = useImage(element.src);
  return (
    <KonvaImage
      x={element.x}
      y={element.y}
      image={image}
      width={element.width}
      height={element.height}
      rotation={element.rotation}
      scaleX={element.scaleX}
      scaleY={element.scaleY}
    />
  );
};
