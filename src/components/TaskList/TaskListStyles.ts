import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TaskListStyled = styled(motion.ul)`
	.task-list__item {
		background: rgba(24, 26, 26, 0.5);
		padding: 15px 15px 15px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 600px;
		margin: auto;
		border-radius: 25px;
		height: 60px;
		margin-bottom: 20px;
	}

	.item__text {
		font-size: 24px;
		color: #e6e6e6;
	}

	.task-list__actions {
		display: flex;
		align-items: center;
	}

	.actions__btn {
		border: none;
		cursor: pointer;
		background: #e6e6e6;
		margin-left: auto;
		width: 45px;
		height: 45px;
		border-radius: 100px;
	}

	.actions__btn:last-child {
		margin-left: 15px;
	}
`;
