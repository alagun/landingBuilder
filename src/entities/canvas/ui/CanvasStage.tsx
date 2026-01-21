'use client';

import { Stage, Layer, Text, } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux';

import { CanvasImage } from './CanvasImage';
import { CanvasProduct } from './CanvasProduct';
import { selectElements, selectSelectedElementId, selectElement } from '../model/slices';
import { CanvasElement } from '../model/types';

interface CanvasStageProps {
  width?: number;
  height?: number;
}

export const CanvasStage = ({ width = 800, height = 600 }: CanvasStageProps) => {
  const elements = useSelector(selectElements);
  const selectedId = useSelector(selectSelectedElementId);
  const dispatch = useDispatch();

  const renderElement = (el: CanvasElement) => {
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
            onClick={() => dispatch(selectElement(el.id))}
          />
        );

      case 'image':
        return <CanvasImage key={el.id} element={el} />;

      case 'product':
        return <CanvasProduct key={el.id} element={el} onClick={() => dispatch(selectElement(el.id))} />;

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
