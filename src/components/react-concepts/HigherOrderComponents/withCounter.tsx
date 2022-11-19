import React from 'react'

interface PropsT {
	children?: JSX.Element
}

export interface State {
	count: number
}

export default function withCounter(
	WrappedComponent: any,
	incrementNumber: number,
) {
	return class WithCounter extends React.Component<PropsT, State> {
		constructor(props: PropsT) {
			super(props)

			this.state = {
				count: 0,
			}
		}

		incrementCount = () => {
			this.setState((prv) => {
				return {
					count: (prv.count + incrementNumber) | 1,
				}
			})
		}

		render() {
			return (
				<WrappedComponent
					count={this.state.count}
					incrementCount={this.incrementCount}
					{...this.props}
				/>
			)
		}
	}
}
