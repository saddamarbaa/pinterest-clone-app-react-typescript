import React from 'react'
import styled from 'styled-components'

type PropsT = {
	url?: string
}

type State = {}

export default class Pin extends React.Component<PropsT, State> {
	render() {
		return (
			<Wrapper>
				<Container>
					<img src={this.props.url} alt="pins" />
				</Container>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	display: inline-flex;
	padding: 10px;
`

const Container = styled.div`
	cursor: pointer;
	width: 236px;
	box-sizing: border-box;
	img {
		display: flex;
		height: 100%;
		width: 100%;
		border-radius: 16px;
		cursor: zoom-in;
		object-fit: cover;
		cursor: pointer;
	}
`
