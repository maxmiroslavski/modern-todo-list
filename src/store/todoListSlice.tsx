import { createSlice } from '@reduxjs/toolkit';

interface todoInterface {
	items: { id: string; text: string }[];
}

if (!localStorage.getItem('tasks')) {
	localStorage.setItem('tasks', '[]');
} else {
	localStorage.getItem('tasks');
}

const itemsLocalStorage = JSON.parse(localStorage.getItem('tasks') || '');

const initialState: todoInterface = { items: itemsLocalStorage };

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

			localStorage.setItem('tasks', JSON.stringify(state.items));
		},
		removeTask(state, action) {
			const id = action.payload;

			state.items = state.items.filter((item) => item.id !== id);

			localStorage.setItem('tasks', JSON.stringify(state.items));
		},
	},
});

const { addTask, removeTask } = todoListSlice.actions;

export { todoListSlice, addTask, removeTask };
