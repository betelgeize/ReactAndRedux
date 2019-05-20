import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

const { Component } = React
const target = document.getElementById('react-container')
const serializeClockTime = date =>
	({
		hours: date.getHours(),
		minutes: date.getMinutes(),
		seconds: date.getSeconds()
	})
export default class Clock extends Component {
	constructor() {
		super()
		this.state = serializeClockTime()
	}
	componentDidMount() {
		console.log("Starting Clock")
		this.ticking = setInterval(() =>
				this.setState(serializeClockTime())
			, 1000)
	}
	componentWillUnmount() {
		clearInterval(this.ticking)
		console.log("Stopping Clock")
	}
	render() {
		const { hours, minutes, seconds, timeOfDay } = this.state
		return (
			<div className="clock">
				<span>{hours}</span>
				<span>:</span>
				<span>{minutes}</span>
				<span>:</span>
				<span>{seconds}</span>
				<span>{timeOfDay}</span>
				<button onClick={this.props.onClose}>x</button>
			</div>
		)
	}
}
render(
	<Clock onClose={() => unmountComponentAtNode(target) }/>,
	target
)
