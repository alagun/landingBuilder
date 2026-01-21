'use client'
import { useDispatch } from 'react-redux';
import { addElement } from '@/entities/canvas/model/slices';
import { CanvasStage } from '@/entities/canvas/ui/CanvasStage';
import { v4 as uuid } from 'uuid';

export default function EditorPage() {
  const dispatch = useDispatch();

  const addTestText = () => {
    dispatch(addElement({
      id: uuid(),
      type: 'text',
      text: 'Hello World',
      fontSize: 24,
      fontFamily: 'Arial',
      fill: 'black',
      x: 50,
      y: 50,
      width: 150,
      height: 50,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      layer: 1,
    }));
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Landing Builder Editor</h1>
      <button onClick={addTestText}>Добавить текст</button>
      <CanvasStage />
    </main>
  );
}
