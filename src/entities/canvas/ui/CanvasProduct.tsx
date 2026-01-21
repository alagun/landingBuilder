import { Image as KonvaImage, Text } from 'react-konva';
import useImage from 'use-image';

import { CanvasElement } from "../model/types";

interface ICanvasProductProps {
  element: CanvasElement & { type: 'product'; thumbnail: string; title: string; price: number };
  onClick?: () => void;
}

export const CanvasProduct = ({ element, onClick }: ICanvasProductProps) => {
  const [image] = useImage(element.thumbnail);
  return (
    <>
      <KonvaImage
        x={element.x}
        y={element.y}
        image={image}
        width={element.width}
        height={element.height}
        onClick={onClick}
      />
      <Text text={element.title} x={element.x} y={element.y + element.height + 5} fontSize={14} />
      <Text text={`$${element.price}`} x={element.x} y={element.y + element.height + 20} fontSize={12} fill="green" />
    </>
  );
};
