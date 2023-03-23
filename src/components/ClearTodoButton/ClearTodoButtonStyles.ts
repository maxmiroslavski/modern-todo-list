import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ClearButtonStyled = styled(motion.button)`
	position: absolute;
	padding: 7px 20px;
	bottom: 30px;
	right: 30px;
	font-family: 'Rubik', sans-serif;
	font-size: 22px;
	border: none;
	outline: none;
	cursor: pointer;
	border-radius: 25px;
	color: #181a1a;

	@media (max-width: 768px) {
		font-size: 20px;
		right: 15px;
	}
`;
