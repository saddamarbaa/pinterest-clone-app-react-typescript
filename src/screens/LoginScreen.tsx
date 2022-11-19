import React, { Component } from 'react'
import styled from 'styled-components'
import {
	auth,
	googleProvider,
	signInWithPopup,
	GoogleAuthProvider,
} from '../configs/firebase'
import AuthContext from '../contexts/authContext'

type Props = {}

type State = {}

export default class LoginScreen extends Component<Props, State> {
	static contextType = AuthContext
	context!: React.ContextType<typeof AuthContext>

	constructor(props: Props) {
		super(props)

		this.state = {}

		this.signInWithGoogleHandler = this.signInWithGoogleHandler.bind(this)
	}

	signInWithGoogleHandler() {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential?.accessToken
				// The signed-in user info.
				const user = result.user

				console.log('user', user)

				const auth = {
					displayName: user?.displayName || '',
					email: user?.email || '',
					photoURL: user?.photoURL || '',
					uid: user?.uid || '',
				}

				try {
					window.localStorage.setItem('auth', JSON.stringify(auth))
				} catch (err) {}

				this.context.logIn(auth)
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message
				// The email of the user's account used.
				const email = error.customData.email
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error)
				alert(errorMessage)
			})
	}

	render() {
		return (
			<LoginWrapper>
				<LoginContainer>
					<img
						src="https://cdn.worldvectorlogo.com/logos/pinterest-1.svg"
						alt="Pinteres logo"
					/>
					<LoginText>
						<h2>Sign in to Pinterest</h2>
					</LoginText>
					<Button onClick={this.signInWithGoogleHandler}>
						Sign In With Google
					</Button>
				</LoginContainer>
			</LoginWrapper>
		)
	}
}

const LoginWrapper = styled.div`
	display: grid;
	background: #f8f8f8;
	width: 100vw;
	height: 100vh;
	place-items: center;
`

const LoginContainer = styled.div`
	padding: 50px 100px;
	text-align: center;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
	img {
		height: 100px;
		object-fit: contain;
		margin-bottom: 40px;
	}
`

const Button = styled.button`
	padding: 0.8em 1em;
	border-radius: 3px;
	background-color: #e60023;
	border-color: #e60023;
	cursor: pointer;
	margin-top: 2.4rem;
	color: white;
	font-size: 17px;
	transition: 0.5;
`

const LoginText = styled.div``
