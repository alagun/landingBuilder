'use client';

import { Stage, Layer, Text, } from 'react-konva';
import { useSelector } from 'react-redux';

import { CanvasImage } from './CanvasImage';
import { CanvasProduct } from './CanvasProduct';
import { selectElements, selectSelectedElementId, selectElement, updateElement } from '../model/slices';
import { CanvasElement } from '../model/types';
import { useAppDispatch } from '@/shared/lib/hooks';

interface ICanvasStageProps {
  width?: number;
  height?: number;
}

export const CanvasStage = ({ width = 800, height = 600 }: ICanvasStageProps) => {
  const elements = useSelector(selectElements);
  const selectedId = useSelector(selectSelectedElementId);
  const dispatch = useAppDispatch();

  const renderElement = (el: CanvasElement) => {
    const isSelected = el.id === selectedId;

    switch (el.type) {
      case 'text':
        return (
          <Text
            key={el.id}
            x={el.x}
            y={el.y}
            text={el.text}
            fontSize={el.fontSize}
            fontFamily={el.fontFamily}
            fill={el.fill}
            rotation={el.rotation}
            scaleX={el.scaleX}
            scaleY={el.scaleY}
            stroke={isSelected ? 'blue' : undefined}
            strokeWidth={isSelected ? 2 : 0}
            onClick={() => dispatch(selectElement(el.id))}
            draggable
            onDragEnd={(e) => {
              dispatch(
                updateElement({
                  ...el,
                  x: e.target.x(),
                  y: e.target.y(),
                })
              );
            }}
          />
        );

      case 'image':
        return <CanvasImage key={el.id} element={el} isSelected={isSelected}/>;

      case 'product':
        return <CanvasProduct key={el.id} element={el} isSelected={isSelected}/>;

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        border: '2px solid #ccc',
        width,
        height,
        margin: '20px auto',
      }}
    >
      <Stage width={width} height={height}>
        <Layer>
          {elements.map(el => renderElement(el))}
        </Layer>
      </Stage>
    </div>
  );
};
