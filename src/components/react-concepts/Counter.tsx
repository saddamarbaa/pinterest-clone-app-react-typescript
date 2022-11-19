import React, { Component } from 'react'

type Props = {}

type State = {
	count: number
}

export default class Counter extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			count: 0,
		}
	}

	handleUpdateCount() {
		this.setState((prevState) => {
			return { count: prevState.count + 1 }
		})
	}

	render() {
		return (
			<div>
				<div>{this.state.count}</div>
				<button onClick={() => this.handleUpdateCount()}>Increment</button>
			</div>
		)
	}
}
