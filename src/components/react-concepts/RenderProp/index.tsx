import React, { Component } from 'react'
import styled from 'styled-components'
import ClickCounter2 from './ClickCounter'
import RenderPropsCounter from './Counter'
import HoverCounter2 from './HoverCounter'

import User from './User'

type Props = {}

type State = {}

export default class RenderPropsUI extends Component<Props, State> {
	state = {}

	render() {
		return (
			<Wrapper>
				<Container>
					<User
						render={(isLogin) => (isLogin ? 'Welcome Saddam' : 'Welcome Guest')}
					/>

					<RenderPropsCounter>
						{(count: number, incrementCount: () => void) => (
							<ClickCounter2 count={count} incrementCount={incrementCount} />
						)}
					</RenderPropsCounter>

					<RenderPropsCounter>
						{(count: number, incrementCount: () => void) => (
							<HoverCounter2 count={count} incrementCount={incrementCount} />
						)}
					</RenderPropsCounter>
				</Container>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	display: flex;
	padding: 3rem;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const Container = styled.div`
	margin-top: 2rem;
	font-size: 1.2rem;
`
