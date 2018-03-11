import * as React from 'react';

class Timer extends React.Component {
	timeStamp;

	constructor(props) {
		super(props);
		this.state = {
			time: new Date() ,
		}
	}

	componentDidMount() {
		this.timeStamp = setInterval(() => this.tick(), 1000)
	}

	componentWillMount() {
		clearInterval(this.timeStamp)
	}

	tick() {
		this.setState({time: new Date()})
	}

	render() {
		return (
			<h1>{this.state.time.toLocaleTimeString()}</h1>
		)
	}
	
}

export default Timer;