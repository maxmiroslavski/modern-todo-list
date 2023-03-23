// React
import React from 'react';

// Components
import { Main } from './Main';

export const MainContainer = () => {
	return <Main fetchAddress="https://type.fit/api/quotes" />;
};
