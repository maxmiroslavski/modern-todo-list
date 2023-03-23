import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ClearButtonStyled = styled(motion.button)`
	font-family: 'Rubik', sans-serif;
	border-radius: 25px;
	position: absolute;
	padding: 7px 20px;
	cursor: pointer;
	font-size: 22px;
	color: #181a1a;
	outline: none;
	border: none;
	bottom: 30px;
	right: 30px;

	@media (max-width: 768px) {
		font-size: 20px;
		right: 15px;
	}
`;
