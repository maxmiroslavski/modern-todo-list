// React
import React from 'react';

// Redux
import { useAppSelector } from '../../hooks/reduxHooks';

// Components
import { ColorButtonsItem } from './ColorButtonsItem';
import { ColorButtonsStyled } from './ColorButtonsStyles';

export const ColorButtons = () => {
	const colorItems = useAppSelector((state) => state.colorButtonsSlice.items);

	const listOfButtons = colorItems.map((item) => (
		<ColorButtonsItem
			key={item.id}
			id={item.id}
			background={item.background}
			isActive={item.active}
		/>
	));
	return (
		<ColorButtonsStyled
			initial={{ y: -300 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
		>
			{listOfButtons}
		</ColorButtonsStyled>
	);
};
