import React from 'react'
import PropTypes from 'prop-types';

class Summary4 extends React.Component {
	/*для поддержки статических полей и инициализаторов требуется @babel/plugin-proposal-class-properties*/
	static propTypes = {
		ingredients: PropTypes.number,
		steps: PropTypes.number,
		name: (props, propName) =>
			(typeof props[propName] !== 'string') ?
				new Error("A title must be a string") :
				(props[propName].length > 20) ?
					new Error(`title is over 20 characters`) :
					null
	}
	static defaultProps = {
		ingredients: 0,
		steps: 0,
		name: "[recipe]"
	}

	render() {
		const {ingredients, steps, name} = this.props;

		return (
			<div className="summary">
				<h1>{name}</h1>
				<p>
					<span>{ingredients} Ingredients</span> |
					<span>{steps} Steps</span>
				</p>
			</div>
		)
	}
};
export default Summary4;
