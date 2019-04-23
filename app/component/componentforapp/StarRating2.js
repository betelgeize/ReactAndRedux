import Star from './../Star'
import React from 'react'

//не желательно использовать create class
const StarRating2 = ({starsSelected=0, totalStars=5, onRate=f=>f}) =>
	<div className="star-rating">
		{[...Array(totalStars)].map((n, i) =>
			<Star key={i}
				  selected={i<starsSelected}
				  onClick={() => onRate(i+1)}/>
		)}
		<p>{starsSelected} of {totalStars} stars</p>
	</div>

export default StarRating2

