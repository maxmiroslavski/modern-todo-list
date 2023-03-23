import styled from 'styled-components';

export const FormStyled = styled.form`
	min-width: 800px;
	height: 60px;
	background: #181a1a;
	margin-bottom: 40px;
	border-radius: 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1024px) {
		min-width: 0;
		max-width: 800px;
	}

	@media (max-width: 768px) {
		height: 55px;
	}

	@media (max-width: 425px) {
		height: 50px;
		border-radius: 20px;
	}

	.form__input {
		background: none;
		border: none;
		outline: none;
		color: #fff;
		font-family: 'Rubik', sans-serif;
		margin: 0 20px;
		font-size: 24px;
		width: 100%;

		@media (max-width: 768px) {
			font-size: 22px;
		}
	}

	.form__add-btn {
		font-family: 'Rubik', sans-serif;
		border: none;
		outline: none;
		background: #e4e4e4;
		padding: 0 50px;
		height: 60px;
		border-radius: 0px 25px 25px 0px;
		cursor: pointer;
		font-size: 24px;
		transition: 200ms;
		display: flex;
		align-items: center;

		@media (max-width: 768px) {
			height: 55px;
			padding: 0 8px;
		}

		@media (max-width: 425px) {
			height: 50px;
			border-radius: 0px 20px 20px 0px;
		}
	}

	.add-btn__text {
		display: block;
		@media (max-width: 768px) {
			display: none;
		}
	}

	.add-btn__icon {
		display: none;
		height: 40px;
		width: 40px;
		padding-right: 3px;

		@media (max-width: 768px) {
			display: block;
		}
	}

	.form__add-btn:hover {
		background: #f5f4f4;
	}
`;
