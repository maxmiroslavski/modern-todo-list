import { createSlice } from '@reduxjs/toolkit';

interface todoInterface {
	items: { id: string; text: string }[];
}

const initialState: todoInterface = { items: [] };

const todoListSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		addTask(state, action) {
			const newTask = action.payload;
			state.items.push({
				id: newTask.id,
				text: newTask.text,
			});
		},
		removeTask(state, action) {
			const id = action.payload;

			state.items = state.items.filter((item) => item.id !== id);
			// setTimeout(async () => {
			// 	state.items = state.items.filter((item) => item.id !== id);
			// }, 500);
		},
	},
});

const { addTask, removeTask } = todoListSlice.actions;

export { todoListSlice, addTask, removeTask };
