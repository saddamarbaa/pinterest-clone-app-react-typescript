/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import db from "../firebase";

const Header = (props) => {
	const [input, setInput] = useState("");

	const onSearchSubmit = (event) => {
		event.preventDefault();
		props.onSubmit(input);
		// Add a new document in collection "terms"
		db.collection("terms").add({
			term: input,
		});
	};

	return (
		<Wrapper>
			<LogoWrapper>
				<IconButton>
					<PinterestIcon />
				</IconButton>
			</LogoWrapper>
			<HomePageButton>
				<a href='/'>Home</a>
			</HomePageButton>
			<FollowingButton>
				<a href='/'>Flowing </a>
			</FollowingButton>
			<SearchWrapper>
				<SearchBarWrapper>
					<IconButton>
						<SearchIcon />
					</IconButton>
					<form>
						<input
							type='text'
							onChange={(event) => setInput(event.target.value)}
							placeholder='Search'
						/>
						<button
							type='submit'
							onClick={(event) => onSearchSubmit(event)}></button>
					</form>
				</SearchBarWrapper>
			</SearchWrapper>
			<IconWrapper>
				<IconButton>
					<NotificationsIcon />
				</IconButton>

				<IconButton>
					<FaceIcon />
				</IconButton>

				<IconButton>
					<Avatar />
				</IconButton>

				<IconButton>
					<ExitToAppIcon />
				</IconButton>
			</IconWrapper>

			<HiddenFaceIcon>
				<IconButton>
					<ExitToAppIcon />
				</IconButton>
			</HiddenFaceIcon>
		</Wrapper>
	);
};

export default Header;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 56px;
	padding: 30px 4px 10px 16px;
	background-color: white;
	color: black;
`;

const LogoWrapper = styled.div`
	.MuiSvgIcon-root {
		color: #e60023;
		font-size: 32px;
		cursor: pointer;
	}
`;
// Generic button
const HomeCommonButtons = styled.div`
	display: flex;
	height: 48px;
	min-width: 120px;
	align-items: center;
	justify-content: center;
	border-radius: 24px;
	cursor: pointer;

	@media (max-width: 768px) {
		display: none;
	}
`;

// Inherit styles from HomeCommonButtons
const HomePageButton = styled(HomeCommonButtons)`
	background-color: rgb(17, 17, 17);
	a {
		text-decoration: none;
		color: white;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		background-color: white;

		:hover {
			background-color: #e1e1e1;
		}
	}
`;

const FollowingButton = styled(HomeCommonButtons)`
	background-color: white;
	a {
		text-decoration: none;
		color: black;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		display: none;
	}

	:hover {
		background-color: #e1e1e1;
	}
`;

const SearchWrapper = styled.div`
	flex: 0.75;

	@media (max-width: 568px) {
		flex: 1;
	}

	@media (max-width: 360px) {
		max-width: 70vw;
	}
`;

const SearchBarWrapper = styled.div`
	display: flex;
	height: 48px;
	width: 100%;
	border-radius: 50px;
	margin-left: 10px;

	border: none;
	background-color: #efefef;

	form {
		display: flex;
		flex: 1;
	}

	form > input {
		background-color: transparent;
		font-size: 1rem;
		border: none;
		outline: none;
		flex: 1;
	}

	form input :focus {
		border: none;
	}

	form > button {
		display: none;
		outline: none;
	}
`;

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: 10px;
	flex: 0.25;
	@media (max-width: 568px) {
		display: none;
	}
`;

const HiddenFaceIcon = styled.div`
	display: none;

	@media (max-width: 568px) {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-left: 10px;
	}

	@media (max-width: 360px) {
		display: none;
	}
`;
