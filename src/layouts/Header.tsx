import React, { Component } from 'react'
import styled from 'styled-components'
import { FaPinterest, FaSearch } from 'react-icons/fa'
import { BiFace } from 'react-icons/bi'
import { IoIosNotifications, IoMdExit } from 'react-icons/io'

import Avatar from '../Components/UI/Avatar'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { db } from '../configs/firebase'
import AuthContext from '../contexts/authContext'

interface PropsT {
	children?: JSX.Element
	onSubmit: (val: string) => void
}

interface StateT {
	search: string
}

export default class Header extends Component<PropsT, StateT> {
	static contextType = AuthContext
	context!: React.ContextType<typeof AuthContext>
	inputRef: any
	constructor(props: PropsT) {
		super(props)
		this.inputRef = React.createRef()

		this.state = {
			search: '',
		}

		this.handleChange = this.handleChange.bind(this)
		this.onSearchSubmit = this.onSearchSubmit.bind(this)
		this.logOutHandler = this.logOutHandler.bind(this)
	}

	componentDidMount() {
		this.inputRef.current.focus()
		// console.log(this.inputRef)
	}

	handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		let { value } = event.target
		this.setState({
			search: value,
		})
	}

	onSearchSubmit(event: React.FormEvent) {
		const { search } = this.state
		event.preventDefault()

		// this.props.onSubmit(search)
		;(async () => {
			try {
				const docRef = await addDoc(collection(db, 'terms'), {
					term: search,
					timestamp: serverTimestamp() as any,
				})

				this.setState({
					search: '',
				})

				console.log('Document written with ID: ', docRef.id)
			} catch (error: any) {
				console.log('Adding new docs fail: ', error)
				if (error && error?.message) {
					alert(error?.message)
				}
			}
		})()
	}

	logOutHandler() {
		try {
			window.localStorage.removeItem('auth')
		} catch (err) {}
		this.context.logOut()
	}

	render() {
		return (
			<Wrapper>
				<LogoWrapper>
					<FaPinterest className="MuiSvgIcon-root" />
				</LogoWrapper>
				<HomePageButton>
					<span>Home </span>
				</HomePageButton>

				<FollowingButton>
					<span>Flowing </span>
				</FollowingButton>
				<SearchWrapper>
					<SearchBarWrapper>
						<FaSearch />
						<form onSubmit={this.onSearchSubmit}>
							<input
								ref={this.inputRef}
								type="text"
								placeholder="Search"
								value={this.state.search}
								onChange={this.handleChange}
							/>
							<button type="submit"></button>
						</form>
					</SearchBarWrapper>
				</SearchWrapper>

				<IconWrapper>
					<IconButton>
						<IoIosNotifications className="icon" />
						<span className="notifications">200</span>
					</IconButton>

					<IconButton>
						<BiFace className="icon" />
					</IconButton>

					<ShownFaceIcon>
						<Avatar
							url={
								this?.context?.user?.photoURL ||
								'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMGWorldsofAdventure.jpg'
							}
						/>
					</ShownFaceIcon>

					<ShownFaceIcon>
						<IconButton onClick={this.logOutHandler}>
							<IoMdExit className="logout" />
						</IconButton>
					</ShownFaceIcon>
				</IconWrapper>

				<HiddenFaceIcon>
					<IconButton onClick={this.logOutHandler}>
						<IoMdExit className="logout" />
					</IconButton>
				</HiddenFaceIcon>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 56px;
	padding: 30px 4px 10px 16px;
	background-color: white;
	color: black;
`

const LogoWrapper = styled.div`
	.MuiSvgIcon-root {
		color: #e60023;
		font-size: 2rem;
		cursor: pointer;
	}
	margin: 0 1rem;
`
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
`

// Inherit styles from HomeCommonButtons
const HomePageButton = styled(HomeCommonButtons)`
	background-color: rgb(17, 17, 17);
	span {
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
`

const FollowingButton = styled(HomeCommonButtons)`
	background-color: white;
	transition: 0.3s;
	background-color: #e1e1e1;
	margin-left: 10px;
	span {
		text-decoration: none;
		color: black;
		font-weight: 600;
	}
	@media (max-width: 768px) {
		display: none;
	}
`

const SearchWrapper = styled.div`
	flex: 0.75;
	@media (max-width: 568px) {
		flex: 1;
	}
	@media (max-width: 360px) {
		max-width: 70vw;
	}
`

const SearchBarWrapper = styled.div`
	align-items: center;
	display: flex;
	height: 48px;
	width: 100%;
	border-radius: 50px;
	margin-left: 10px;
	border: none;
	background-color: #efefef;
	padding: 0 1rem;
	cursor: pointer;
	form {
		display: flex;
		flex: 1;
		padding: 0 0.3rem;
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
`

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: 10px;
	flex: 0.25;
	@media (max-width: 568px) {
		display: none;
	}
`

const ShownFaceIcon = styled.div`
	.MuiSvgIcon-root {
		color: #e60023;
		background-color: none;
	}
`

const HiddenFaceIcon = styled.div`
	display: none;
	@media (max-width: 567px) {
		display: block;
	}
`

const IconButton = styled.div`
	cursor: pointer;
	margin: 0 0.8rem;
	position: relative;
	.icon {
		font-size: 1.7rem;
		cursor: pointer;
	}
	.logout {
		color: #e60023;
		font-size: 1.7rem;
		cursor: pointer;
	}

	.notifications {
		position: absolute;
		top: -0.9rem;
		left: 6px;
		color: #ff0000;
		font-weight: bold;
		font-size: 0.8rem;
	}
`
