import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TaskListStyled = styled(motion.ul)`
	.task-list__item {
		background: rgba(24, 26, 26, 0.5);
		padding: 10px 10px 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 600px;
		margin: auto;
		border-radius: 25px;
		margin-bottom: 20px;

		@media (max-width: 768px) {
			padding: 10px 15px;
		}

		@media (max-width: 425px) {
			border-radius: 20px;
			padding: 7px 15px;
		}
	}

	.item__text {
		font-size: 24px;
		color: #e6e6e6;
		transition: 100ms;
		word-break: break-all;
		padding-right: 15px;
		/* max-width: 450px; */

		@media (max-width: 768px) {
			font-size: 22px;
		}

		@media (max-width: 425px) {
			font-size: 20px;
		}
	}

	.item__text--complete {
		color: grey;
		text-decoration: line-through;
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
		transition: 100ms;

		@media (max-width: 768px) {
			transform: scale(0.9);
		}

		@media (max-width: 425px) {
			transform: scale(0.8);
		}
	}

	.actions__btn--complete {
		background: grey;
	}

	.actions__btn:last-child {
		margin-left: 15px;

		@media (max-width: 768px) {
			margin-left: 5px;
		}

		@media (max-width: 425px) {
			margin-left: 0px;
		}
	}
`;
