import styled from 'styled-components';

// Packages
import { motion } from 'framer-motion';

export const ColorButtonsStyled = styled(motion.div)`
	position: absolute;
	top: 30px;
	right: 30px;
	display: flex;
	gap: 20px;

	@media (max-width: 768px) {
		right: 15px;
	}

	.color-btn {
		height: 40px;
		width: 40px;
		border-radius: 100px;
		border: none;
		outline: none;
		cursor: pointer;
		background-size: 200% 200%;
		animation: color 6s ease-in-out infinite;
		filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25));
	}

	.active {
		border: 1px solid #fff;
	}

	.color-btn:hover {
		transform: scale(1.1);
	}

	.active {
		border: 1px solid #fff;
	}

	@keyframes color {
		0% {
			background-position: 50% 0%;
		}
		50% {
			background-position: 50% 100%;
		}
		100% {
			background-position: 50% 0%;
		}
	}
`;
