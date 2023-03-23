// React
import React from 'react';

// Redux
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { removeAllTasks } from '../../store/todoListSlice';

// Packages
import { AnimatePresence } from 'framer-motion';

// Components
import { ClearButtonStyled } from './ClearTodoButtonStyles';

export const ClearTodoButton = () => {
	const dispatch = useAppDispatch();

	const itemList = useAppSelector((state) => state.todoList.items);

	return (
		<AnimatePresence key="clear-btn">
			{itemList.length && (
				<ClearButtonStyled
					layout
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.25 }}
					exit={{ opacity: 0 }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.8 }}
					onClick={() => dispatch(removeAllTasks())}
				>
					Clear Tasks
				</ClearButtonStyled>
			)}
		</AnimatePresence>
	);
};
