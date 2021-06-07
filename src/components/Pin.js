/** @format */

import React from "react";
import styled from "styled-components";

const Pin = ({ urls }) => {
	return (
		<Wrapper>
			<Container>
				<img src={urls?.regular} alt='' />
			</Container>
		</Wrapper>
	);
};

export default Pin;

const Wrapper = styled.div`
	/* display: inline-flex;
	padding: 8px; */
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	grid-column-gap: 50px;
	grid-row-gap: 60px;
	border: 1px solid red;
`;

const Container = styled.div`
	/* border: 1px solid blue; */
	/* display: flex;
	align-items: center;
	box-sizing: border-box; */
	cursor: pointer;
	/* width: 260px; */

	/* display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	grid-column-gap: 50px;
	grid-row-gap: 60px; */

	img {
		/* display: flex; */
		width: 100%;
		border-radius: 16px;
		cursor: zoom-in;
		object-fit: cover;
		display: none;
	}
`;
