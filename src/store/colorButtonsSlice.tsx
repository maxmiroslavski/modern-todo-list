import { createSlice } from '@reduxjs/toolkit';
import colorButtonsData from '../data/colorButtonsData.json';

interface ColorButtonsInterface {
	items: { id: string; background: string; active: boolean }[];
	selectedColor: string;
}

const colorData = colorButtonsData.map((item) => ({
	id: item.id,
	background: item.background,
	active: item.active,
}));

if (!localStorage.getItem('colors')) {
	localStorage.setItem('colors', JSON.stringify(colorData));
} else {
	localStorage.getItem('colors');
}

const colorDataStorage = JSON.parse(localStorage.getItem('colors') || '');

const index = colorDataStorage.findIndex(
	(item: { id: string; background: string; active: boolean }) =>
		item.active === true
);

const initialState: ColorButtonsInterface = {
	items: colorDataStorage,
	selectedColor: colorDataStorage[index].background,
};

const colorButtonsSlice = createSlice({
	name: 'colorButtons',
	initialState,
	reducers: {
		switchColor(state, action) {
			const { background, id } = action.payload;

			state.selectedColor = background;

			state.items = state.items.map((item) =>
				item.id === id
					? { ...item, active: true }
					: { ...item, active: false }
			);

			localStorage.setItem('colors', JSON.stringify(state.items));
		},
	},
});

const { switchColor } = colorButtonsSlice.actions;

export { colorButtonsSlice, switchColor };
