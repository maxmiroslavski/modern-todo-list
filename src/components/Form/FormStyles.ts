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

	.form__input {
		background: none;
		border: none;
		outline: none;
		color: #fff;
		font-family: 'Rubik', sans-serif;
		margin: 0 20px;
		font-size: 24px;
		width: 100%;
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
	}

	.form__add-btn:hover {
		background: #f5f4f4;
	}
`;
