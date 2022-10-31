import React from 'react'
import withCounter from './withCounter'

interface PropsT {
	incrementCount: () => void
	count: number
	name?: string
}

export interface State {}

class ClickCounter extends React.Component<PropsT, State> {
	render() {
		return (
			<div>
				<button onClick={this.props.incrementCount}>
					<h3>Click {this.props.count} Time</h3>
				</button>
			</div>
		)
	}
}

export default withCounter(ClickCounter, 5)
