import React from 'react'

import ErrorBoundary from './Components/ErrorBoundary'

import AuthContext, { AuthConsumer } from './contexts/authContext'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

export default class App extends React.Component<{}, {}> {
	static contextType = AuthContext
	context!: React.ContextType<typeof AuthContext>

	async componentDidMount() {
		try {
			const cachedUser = window.localStorage.getItem('auth')
			if (cachedUser) {
				const auth = JSON.parse(cachedUser)
				this.context.logIn(auth)
			}
		} catch (err) {
			this.context.logOut()
		}
	}

	render() {
		return (
			<>
				{this.context.user ? (
					<HomeScreen />
				) : (
					<ErrorBoundary>
						<LoginScreen />
					</ErrorBoundary>
				)}
			</>
		)
	}
}
