// React
import React from 'react';

// Redux
import { useAppDispatch } from '../../hooks/reduxHooks';
import { removeTask } from '../../store/todoListSlice';

// Assets
import checkIcon from '../../assets/check-icon.svg';
import trashIcon from '../../assets/trash-icon.svg';

// Packages
import { motion } from 'framer-motion';

export const TaskListItem = (props: { task: string; id: string }) => {
	const { task, id } = props;

	const dispatch = useAppDispatch();

	return (
		<motion.li
			key={id}
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
			exit={{ opacity: 0, scale: 0.5 }}
			className="task-list__item"
		>
			<span className="item__text">{task}</span>

			<div className="task-list__actions">
				<button className="actions__btn">
					<img src={checkIcon} alt="Check icon" />
				</button>

				<button
					className="actions__btn"
					onClick={() => dispatch(removeTask(id))}
				>
					<img src={trashIcon} alt="Trash icon" />
				</button>
			</div>
		</motion.li>
	);
};
