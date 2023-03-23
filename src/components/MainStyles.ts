import styled from 'styled-components';

export const MainStyled = styled.main.attrs(
	(props: { background: string }) => ({
		background: props.background,
	})
)`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	padding: 175px 30px;
	background: ${(props) => props.background};
	background-size: 300% 300%;
	animation: color 12s ease-in-out infinite;

	@media (max-width: 768px) {
		padding: 125px 15px;
	}

	@media (max-width: 425px) {
		padding: 100px 15px;
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
