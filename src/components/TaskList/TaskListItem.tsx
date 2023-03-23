// React
import React, { useState } from 'react';

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

	const [isComplete, setIsComplete] = useState(false);

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
			<span
				className={`item__text ${
					isComplete ? 'item__text--complete' : ''
				}`}
			>
				{task}
			</span>

			<div className="task-list__actions">
				<motion.button
					className={`actions__btn ${
						isComplete ? 'actions__btn--complete' : ''
					}`}
					onClick={() => setIsComplete(!isComplete)}
				>
					<img
						className="btn__icon"
						src={checkIcon}
						alt="Check icon"
					/>
				</motion.button>

				<motion.button
					className={`actions__btn ${
						isComplete ? 'actions__btn--complete' : ''
					}`}
					onClick={() => dispatch(removeTask(id))}
				>
					<img
						className="btn__icon"
						src={trashIcon}
						alt="Trash icon"
					/>
				</motion.button>
			</div>
		</motion.li>
	);
};
