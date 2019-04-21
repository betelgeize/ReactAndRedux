import PropTypes from 'prop-types';

const Summary2 = ({ ingredients, steps, title }) => {
	return <div>
		<h1>{title}</h1>
		<p>{ingredients} Ingredients | {steps} Steps</p>
	</div>
};
Summary2.propTypes = {
	ingredients: PropTypes.number.isRequired,
	steps: PropTypes.number.isRequired
};
Summary2.defaultProps = {
	ingredients: 1,
	steps: 1
};
export default Summary2;
