/** @format */

import React from "react";
import styled from "styled-components";

const Pin = ({ urls }) => {
	return (
		<Container>
			<img src={urls?.regular} alt='' />
		</Container>
	);
};

export default Pin;

const Container = styled.div`
	cursor: pointer;
	min-width: 260px;

	img {
		height: 100%;
		width: 100%;
		border-radius: 16px;
		cursor: zoom-in;
		object-fit: cover;
		max-height: 300px;
		min-height: 150px;
	}
`;
