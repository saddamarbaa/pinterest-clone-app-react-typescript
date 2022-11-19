import React, { Component } from 'react'
import { AuthContextInterface, AuthT } from '../types'

const AuthContext = React.createContext<AuthContextInterface>({
	isLoading: false,
	isError: false,
	isSuccess: false,
	logIn: () => null,
	logOut: () => null,
	 user: null,
})

type Props = {
	children?: JSX.Element | JSX.Element[]
	logIn?: () => null
	logOut?: () => null
}

type State = {
	user: AuthT | null
	isLoading: boolean
	isError: boolean
	isSuccess: boolean
}

export class AuthProvider extends Component<Props, State> {
	constructor(props: Props) {
		super(props)

		this.state = {
			user: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		}
	}

	logIn = (user: AuthT) => {
		this.setState({
			user: user,
		})
	}

	logOut = () => {
		this.setState({
			user: null,
		})
	}

	render() {
		const { user, isLoading, isError, isSuccess } = this.state
		const { logOut, logIn } = this
		return (
			<AuthContext.Provider
				value={{ user, isLoading, isError, isSuccess, logIn, logOut }}>
				{this.props.children}
			</AuthContext.Provider>
		)
	}
}

export const AuthConsumer = AuthContext.Consumer
export default AuthContext
