import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CanvasElement } from './types';
import { RootState } from '@/shared/lib/store';

interface ICanvasState {
  elements: CanvasElement[];
  selectedElementId: string | null;
}

const initialState: ICanvasState = {
  elements: [],
  selectedElementId: null,
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<CanvasElement>) => {
      state.elements.push(action.payload);
    },
    updateElement: (state, action: PayloadAction<CanvasElement>) => {
      const index = state.elements.findIndex(e => e.id === action.payload.id);
      if (index !== -1) state.elements[index] = action.payload;
    },
    removeElement: (state, action: PayloadAction<string>) => {
      state.elements = state.elements.filter(e => e.id !== action.payload);
    },
    selectElement: (state, action: PayloadAction<string | null>) => {
      state.selectedElementId = action.payload;
    },
  },
});

export const { addElement, updateElement, removeElement, selectElement } = canvasSlice.actions;

// Селекторы
export const selectElements = (state: RootState) => state.canvas.elements;
export const selectSelectedElementId = (state: RootState) =>
  state.canvas.selectedElementId;

export const canvasReducer = canvasSlice.reducer;
