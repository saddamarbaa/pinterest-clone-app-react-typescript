import React from 'react'


interface PropsT {
	incrementCount: () => void
	count: number
}

export interface State {}

export default class ClickCounter2 extends React.Component<PropsT, State> {
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


