/** @format */

import React from "react";
import styled from "styled-components";

const Pin = ({ urls }) => {
	return (
		<Wrapper>
			<Container>
				<img src={urls?.regular} alt='pins' />
			</Container>
		</Wrapper>
	);
};

export default Pin;

const Wrapper = styled.div`
	display: inline-flex;
	padding: 10px;
`;

const Container = styled.div`
	cursor: pointer;
	width: 236px;
	box-sizing: border-box;
	cursor: pointer;

	img {
		display: flex;
		height: 100%;
		width: 100%;
		border-radius: 16px;
		cursor: zoom-in;
		object-fit: cover;
	}
`;
