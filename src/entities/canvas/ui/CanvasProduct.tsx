import { Image as KonvaImage, Text } from 'react-konva';
import useImage from 'use-image';

import { CanvasElement } from "../model/types";
import { selectElement, updateElement } from '../model/slices';
import { useAppDispatch } from '@/shared/lib/hooks';

interface ICanvasProductProps {
  element: CanvasElement & { type: 'product'; thumbnail: string; title: string; price: number };
  isSelected?: boolean;
}

export const CanvasProduct = ({ element, isSelected }: ICanvasProductProps) => {
  const [image] = useImage(element.thumbnail);
  const dispatch = useAppDispatch();

  return (
    <>
      <KonvaImage
        x={element.x}
        y={element.y}
        image={image}
        width={element.width}
        height={element.height}
        stroke={isSelected ? 'blue' : undefined}
        strokeWidth={isSelected ? 2 : 0}
        onClick={() => dispatch(selectElement(element.id))}
        draggable
        onDragEnd={(e) => {
        dispatch(
          updateElement({
            ...element,
            x: e.target.x(),
            y: e.target.y(),
          })
        );
      }}
      />
      <Text text={element.title} x={element.x} y={element.y + element.height + 5} fontSize={14} />
      <Text text={`$${element.price}`} x={element.x} y={element.y + element.height + 20} fontSize={12} fill="green" />
    </>
  );
};
