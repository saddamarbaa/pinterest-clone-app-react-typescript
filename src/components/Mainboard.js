/** @format */

import React from "react";
import styled from "styled-components";
import Pin from "./Pin";
import { v4 as uuidv4 } from "uuid";

const Mainboard = ({ pins }) => {
	return (
		<Wrapper>
			<Container>
				{pins.map((pin) => {
					let imageUrls = pin.urls;
					// return the result to pin component
					return <Pin urls={imageUrls} key={uuidv4()} />;
				})}
			</Container>
		</Wrapper>
	);
};

export default Mainboard;

const Wrapper = styled.div`
	padding: 20px;
	display: grid;
	place-items: center;
	width: 100%;
`;

const Container = styled.div`
	width: 93%;
	display: grid;
	place-items: center;
	justify-content: space-between;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	grid-gap: 8px;

	@media (max-width: 360px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`;
