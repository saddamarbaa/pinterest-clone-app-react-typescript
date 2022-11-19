import React from 'react'


interface PropsT {
	incrementCount: () => void
	count: number
	name?: string
}

export interface State {}

export default class HoverCounter2 extends React.Component<PropsT, State> {
	render() {
		return (
			<h2 onMouseOver={this.props.incrementCount}>
				Hover {this.props.count} Time
			</h2>
		)
	}
}

