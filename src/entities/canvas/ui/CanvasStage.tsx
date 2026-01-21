'use client';

import { Stage, Layer, Rect, Text } from 'react-konva';
import { useState } from 'react';

interface ICanvasStageProps {
  width?: number;
  height?: number;
}

export const CanvasStage = ({ width = 800, height = 600 }: ICanvasStageProps) => {
  const [stageScale, setStageScale] = useState(1);

  return (
    <div
      style={{
        border: '2px solid #ccc',
        width,
        height,
        margin: '20px auto',
      }}
    >
      <Stage width={width} height={height} scaleX={stageScale} scaleY={stageScale}>
        <Layer>
          <Rect x={50} y={50} width={100} height={50} fill="lightblue" />
          <Text text="Hello Konva" x={200} y={100} fontSize={20} />
        </Layer>
      </Stage>
    </div>
  );
};
