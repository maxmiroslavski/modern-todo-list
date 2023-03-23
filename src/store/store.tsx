import { configureStore } from '@reduxjs/toolkit';
import { todoListSlice } from './todoListSlice';
import { colorButtonsSlice } from './colorButtonsSlice';

export const store = configureStore({
	reducer: {
		todoList: todoListSlice.reducer,
		colorButtonsSlice: colorButtonsSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
