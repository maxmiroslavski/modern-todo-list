// React
import React from 'react';

// Redux
import { useAppDispatch } from '../../hooks/reduxHooks';
import { switchColor } from '../../store/colorButtonsSlice';

// Packages
import { motion } from 'framer-motion';

export const ColorButtonsItem = (props: {
	background: string;
	id: string;
	isActive: boolean;
}) => {
	const { background, id, isActive } = props;

	const dispatch = useAppDispatch();

	const colorButtonClickHandler = () => {
		dispatch(switchColor({ background, id }));
	};

	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.1 }}
			onClick={colorButtonClickHandler}
			style={{ background: `${background}` }}
			className={`color-btn ${isActive ? 'active' : ''}`}
		></motion.button>
	);
};
