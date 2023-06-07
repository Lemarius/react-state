import { useState } from 'react';
import Counter from './components/counter/Counter';

const App = () => {
	const [state, setState] = useState(0);

	return (
		<>
			<h1>{state}</h1>
			<button onClick={() => handleClick(state, setState)}>CLICK ME</button>

			<Counter />
		</>
	);
};

const handleClick = (state, setState) => {
	setState(state + 1);
};

export default App;
