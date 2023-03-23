// React
import React from 'react';

// Redux
import { useAppSelector } from '../hooks/reduxHooks';

// Packages
import { motion } from 'framer-motion';
import { ClearTodoButton } from './ClearTodoButton/ClearTodoButton';

// Hooks
import { useFetch } from '../hooks/useFetch';

// Components
import { MainStyled } from './MainStyles';
import { ColorButtons } from './ColorButtons/ColorButtons';
import { Form } from './Form/Form';
import { Quote } from './Quote/Quote';
import { TaskList } from './TaskList/TaskList';

export const Main = (props: { fetchAddress: string }) => {
	const { fetchAddress } = props;

	const selectedColor = useAppSelector(
		(state) => state.colorButtonsSlice.selectedColor
	);

	const { quote, isLoading } = useFetch(fetchAddress);

	return (
		<>
			<MainStyled className="container" background={selectedColor}>
				<ColorButtons />
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 1,
					}}
				>
					{!isLoading && (
						<>
							<Quote quote={quote.text} author={quote.author} />
							<Form />
							<TaskList />
						</>
					)}
				</motion.div>
				<ClearTodoButton />
			</MainStyled>
		</>
	);
};
