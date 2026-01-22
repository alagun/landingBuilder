import { Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

import { CanvasElement } from "../model/types";
import { updateElement } from '../model/slices';
import { useAppDispatch } from '@/shared/lib/hooks';

interface ICanvasImageProps {
  element: CanvasElement & { type: 'image'; src: string };
  isSelected?: boolean;
}

export const CanvasImage = ({ element, isSelected }: ICanvasImageProps) => {
  const [image] = useImage(element.src);
  const dispatch = useAppDispatch();

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
      stroke={isSelected ? 'blue' : undefined}
      strokeWidth={isSelected ? 2 : 0}
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
  );
};
