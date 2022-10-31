import React, { Component } from 'react'
import styled from 'styled-components'

import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default class UICounter extends Component {
	render() {
		return (
			<Wrapper>
				<Container>
					{/* @ts-ignore */}
					<HoverCounter name="test name" />
				</Container>
				<Container>
					<ClickCounter />
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
