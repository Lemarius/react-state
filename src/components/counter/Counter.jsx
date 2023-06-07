import { useState } from 'react';
import Button from '../button/Button';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<h1>{counter}</h1>
			<Button
				handleClick={() => sumarClick(counter, setCounter)}
				text={'Sumar 1'}
			/>
			<Button
				handleClick={() => restarClick(counter, setCounter)}
				text={'Restar 1'}
			/>
			<Button
				handleClick={() => resetClick(counter, setCounter)}
				text={'Reset'}
			/>
		</>
	);
};

const sumarClick = (counter, setCounter) => {
	setCounter(counter + 1);
};

const restarClick = (counter, setCounter) => {
	setCounter(counter - 1);
};

const resetClick = (counter, setCounter) => {
	setCounter(0);
};

export default Counter;
