import React, { Component } from 'react'

interface Props {
	children: any
	render?: (counter: number, incrementCount: () => void) => JSX.Element
}

export interface State {
	count: number
}

export default class RenderPropsCounter extends Component<Props, State> {
	constructor(props: Props) {
		super(props)

		this.state = {
			count: 0,
		}
	}

	incrementCount = () => {
		this.setState((prv) => {
			return {
				count: prv.count + 1,
			}
		})
	}

	render() {
		return (
			<div>{this.props.children(this.state.count, this.incrementCount)}</div>
		)
	}
}
