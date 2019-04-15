import React from 'react'

const Summary3 = ({ ingredients=0, steps=0, name='[recipe]' }) => {
	return <div>
		<h1>{name}</h1>
		<p>{ingredients} Ingredients | {steps} Steps</p>
	</div>
};
export default Summary3;
