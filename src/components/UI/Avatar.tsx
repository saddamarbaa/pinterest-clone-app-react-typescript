import React, { Component } from 'react'
import styled from 'styled-components'

type Props = {
	url?: string
}

type State = {}

export default class Avatar extends Component<Props, State> {
	state = {}

	render() {
		return <Wrapper src={this.props.url} alt="avatar" />
	}
}

const Wrapper = styled.img`
	cursor: pointer;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	cursor: pointer;
	margin: 0 0.8rem;
`
