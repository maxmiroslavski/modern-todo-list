// React
import React, { useState } from 'react';

// Redux
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addTask } from '../../store/todoListSlice';

// Assets
import addBtn from '../../assets/add-btn.svg';

// Components
import { FormStyled } from './FormStyles';

// Packages
import { v4 } from 'uuid';

export const Form = () => {
	const dispatch = useAppDispatch();

	const [task, setTask] = useState('');

	const submitFormHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (task === '') {
			return;
		}

		dispatch(
			addTask({
				id: v4(),
				text: task,
			})
		);

		setTask('');
	};

	return (
		<FormStyled onSubmit={submitFormHandler}>
			<input
				onChange={(e) => setTask(e.target.value)}
				className="form__input"
				type="text"
				placeholder="Add a task"
				value={task}
			/>
			<button className="form__add-btn">
				<img className="add-btn__icon" src={addBtn} alt="add-btn" />
				<span className="add-btn__text">Add</span>
			</button>
		</FormStyled>
	);
};
