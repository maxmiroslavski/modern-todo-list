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
	padding: 220px 0;
	background: ${(props) => props.background};
	background-size: 200% 200%;
	animation: color 12s ease-in-out infinite;

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
