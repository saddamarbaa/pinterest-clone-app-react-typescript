import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import { PinsT } from '../../types'
import Pin from './Pin'

interface PropsT {
	pins: PinsT
}

export interface State {}

export default class MainBoard extends React.Component<PropsT, State> {
	componentWillMount() {
		// console.log('Testing componentWillMount lifecycle')
		// throw new Error('Testing Error Boundaries')
	}
	render() {
		return (
			<Wrapper>
				<Container>
					{this.props.pins.map((pin) => (
						<Pin url={pin.urls?.regular} key={uuidv4()} />
					))}
				</Container>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin-top: 20px;
	overflow: hidden;
`

const Container = styled.div`
	column-count: 3;
	column-gap: 15px;
	background-color: white;
	width: 90%;
	@media (max-width: 360px) {
		column-count: 1;
		max-width: 380px;
	}
	@media (min-width: 360px) and (max-width: 755px) {
		column-count: 2;
		max-width: 504px;
	}
	@media (min-width: 756px) and (max-width: 1007px) {
		column-count: 3;
		max-width: 756px;
	}
	@media (min-width: 1008px) and (max-width: 1259px) {
		column-count: 4;
		max-width: 1008px;
	}
	@media (min-width: 1260px) and (max-width: 1511px) {
		column-count: 5;
		max-width: 1260px;
	}
	@media (min-width: 1512px) and (max-width: 1763px) {
		column-count: 6;
		max-width: 1512px;
	}
	@media (min-width: 1764px) and (max-width: 2015px) {
		column-count: 7;
		max-width: 1764px;
	}
	@media (min-width: 2016px) and (max-width: 2267px) {
		column-count: 8;
		max-width: 2016px;
	}
	@media (min-width: 2268px) and (max-width: 2519px) {
		column-count: 9;
		max-width: 2268px;
	}
	@media (min-width: 2520px) and (max-width: 2771px) {
		column-count: 10;
		max-width: 2520px;
	}
	@media (min-width: 2772px) and (max-width: 3023px) {
		column-count: 11;
		max-width: 2772px;
	}
	@media (min-width: 3024px) and (max-width: 3275px) {
		column-count: 12;
		max-width: 3024px;
	}
	@media (min-width: 3276px) and (max-width: 3527px) {
		column-count: 13;
		max-width: 3276px;
	}
	@media (min-width: 3528px) and (max-width: 3779px) {
		column-count: 14;
		max-width: 3528px;
	}
	@media (min-width: 3780px) and (max-width: 4031px) {
		column-count: 15;
		max-width: 3780px;
	}
	@media (min-width: 4032px) and (max-width: 4282px) {
		column-count: 16;
		max-width: 4032px;
	}
	@media (min-width: 4032px) and (max-width: 4283px) {
		column-count: 16;
		max-width: 4032px;
	}
	@media (min-width: 4284px) and (max-width: 4535px) {
		column-count: 17;
		max-width: 4284px;
	}
	@media (min-width: 4536px) and (max-width: 4787px) {
		column-count: 18;
		max-width: 4536px;
	}
	@media (min-width: 4788px) and (max-width: 5039px) {
		column-count: 19;
		max-width: 4788px;
	}
`
