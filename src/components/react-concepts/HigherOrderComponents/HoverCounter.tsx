import React from 'react'
import withCounter from './withCounter'

interface PropsT {
	incrementCount: () => void
	count: number
	name?: string
}

export interface State {}

class HoverCounter extends React.Component<PropsT, State> {
	render() {
		return (
			<h2 onMouseOver={this.props.incrementCount}>
				Hover {this.props.count} Time
			</h2>
		)
	}
}

export default withCounter(HoverCounter, 10)
