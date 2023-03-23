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

const initialState: ColorButtonsInterface = {
	items: colorData,
	selectedColor: colorButtonsData[0].background,
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
		},
	},
});

const { switchColor } = colorButtonsSlice.actions;

export { colorButtonsSlice, switchColor };
