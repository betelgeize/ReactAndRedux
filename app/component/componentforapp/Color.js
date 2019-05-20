import {Component} from 'react';
import StarRating2 from "./StarRating2";
import PropTypes from 'prop-types';

/*const Color = ({ title, color, rating=0,onRemove=f=>f,onRate=f=>f }) =>
	<section className="color">
		<h1>{title}</h1>
		<button onClick={onRemove}>X</button>
		<div className="color"
			 style={{ backgroundColor: color, height: 40 }}>
		</div>
		<div>
			<StarRating2 starsSelected={rating} onRate={onRate} />
		</div>
	</section>

export default Color;*/

//переделка функционального компонента в класс

export default class Color extends Component {
	componentWillMount() {
		this.style = { backgroundColor: "#CCC" }
	}
	componentWillUpdate() {
		this.style = null
	}
	render() {
		const { title, rating, color, onRate } = this.props;
		return (
			<section className="color" style={this.style}>
				<h1 ref="title">{title}</h1>
				<div className="color"
					 style={{height: 40, backgroundColor: color }}>
				</div>
				<StarRating2 starsSelected={rating}	onRate={onRate} />
			</section>
		)
	}
}
Color.propTypes = {
	title: PropTypes.string,
	rating: PropTypes.number,
	color: PropTypes.string,
	onRate: PropTypes.func
};
Color.defaultProps = {
	title: '',
	rating: 0,
	color: "#000000",
	onRate: f=>f
};
