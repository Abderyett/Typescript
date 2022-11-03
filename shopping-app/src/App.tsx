import React from 'react';
import Greeter from './components/Greeter'
import './App.css';

function App() {
	return (
		<div className='App'>
			<Greeter person="Colt"/>
			<Greeter person="Jesse"/>
			<Greeter person="Andy"/>
		</div>
	);
}

export default App;
