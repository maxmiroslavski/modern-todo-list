// React
import React from 'react';

// Redux
import { useAppSelector } from '../../hooks/reduxHooks';

// Components
import { TaskListItem } from './TaskListItem';
import { TaskListStyled } from './TaskListStyles';

// Packages
import { AnimatePresence } from 'framer-motion';

export const TaskList = () => {
	const taskItems = useAppSelector((state) => state.todoList.items);

	const todoList = taskItems.map((item) => (
		<TaskListItem key={item.id} task={item.text} id={item.id} />
	));

	return (
		<TaskListStyled>
			<AnimatePresence>{todoList}</AnimatePresence>
		</TaskListStyled>
	);
};
