export type CanvasElementType = 'text' | 'image' | 'product';

export interface CanvasElementBase {
  id: string;
  type: CanvasElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
  layer: number;
}

export interface ITextElement extends CanvasElementBase {
  type: 'text';
  text: string;
  fontSize: number;
  fontFamily: string;
  fill: string;
}

export interface IImageElement extends CanvasElementBase {
  type: 'image';
  src: string;
}

export interface IProductElement extends CanvasElementBase {
  type: 'product';
  productId: number;
  title: string;
  price: number;
  thumbnail: string;
}

export type CanvasElement = ITextElement | IImageElement | IProductElement;
