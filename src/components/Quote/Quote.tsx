// React
import React from 'react';

// Components
import { QuoteStyled } from './QuoteStyles';

export const Quote = (props: { quote: string; author: string }) => {
	const { quote, author } = props;
	return (
		<>
			<QuoteStyled>
				<p className="quote__text">"{quote}"</p>
				<p className="quote__author">{author}</p>
			</QuoteStyled>
		</>
	);
};
