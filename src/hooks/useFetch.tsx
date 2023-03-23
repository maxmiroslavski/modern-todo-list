import { useState, useEffect } from 'react';

export const useFetch = (fetchData: string) => {
	const [quote, setQuote] = useState({ author: '', text: '' });
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getQuote();
	}, []);

	const getQuote = async () => {
		setIsLoading(true);

		const response = await fetch(fetchData);

		const data = await response.json();

		setQuote(data[Math.floor(Math.random() * data.length)]);

		setIsLoading(false);
	};

	return {
		quote,
		isLoading,
	};
};
