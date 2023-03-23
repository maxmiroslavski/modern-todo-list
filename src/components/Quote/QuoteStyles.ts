import styled from 'styled-components';

export const QuoteStyled = styled.div`
	text-align: center;
	max-width: 800px;
	margin-bottom: 50px;

	.quote__text {
		font-size: 50px;
		margin-bottom: 20px;

		@media (max-width: 768px) {
			font-size: 46px;
		}

		@media (max-width: 425px) {
			font-size: 38px;
			line-height: 120%;
		}
	}

	.quote__author {
		font-size: 30px;
		font-style: italic;
		font-weight: 100;
		display: inline-block;

		@media (max-width: 768px) {
			font-size: 26px;
		}

		@media (max-width: 425px) {
			font-size: 22px;
		}
	}
`;
