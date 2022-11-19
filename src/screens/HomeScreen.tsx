import React, { ErrorInfo } from 'react'
import styled from 'styled-components'
import {
	collection,
	onSnapshot,
	orderBy,
	query,
	limit,
} from '@firebase/firestore'

import MainBoard from '../Components/UI/MainBoard'
import Header from '../layouts/Header'
import { PinsT } from '../types'
import { getUnsplashImages } from '../utils'
import { db } from '../configs/firebase'
import ErrorBoundary from '../Components/ErrorBoundary'
import { AuthConsumer } from '../contexts/authContext'

interface PropsT {
	children?: JSX.Element
	tesProps?: string
}

interface StateT {
	pins: PinsT
	text?: string
}

interface ErrorStateT {
	hasError: boolean
}

export default class HomeScreen extends React.Component<PropsT, StateT> {
	public error: ErrorStateT = {
		hasError: false,
	}

	unsubscribeFromApiCall: any = null

	// Testing Component lifecycle

	// 1 Initialization: In this phase, the developer has to define the props and initial state of the component this is generally done in the constructor of the component. The following code snippet describes the initialization process.

	constructor(props: PropsT) {
		console.log('Testing constructor lifecycle')
		// Calling the constructor of
		// Parent Class React.Component
		super(props)

		// Setting the initial state
		this.state = {
			pins: [],
			text: 'test life cycle',
		}

		this.onSearchSubmit = this.onSearchSubmit.bind(this)
	}

	//  2. Mounting: Mounting is the phase of the component lifecycle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time on the webpage. Now React follows a default procedure in the Naming Conventions of these predefined functions where the functions containing “Will” represents before some specific phase and “Did” represents after the completion of that phase. The mounting phase consists of two such predefined functions as described below.

	// this is legacy lifecycles now it will be removed
	static getDerivedStateFromProps(
		props: Readonly<PropsT>,
		state: Readonly<StateT>,
	) {
		console.log('Testing getDerivedStateFromProps lifecycle')
		return null // No change to state
	}

	// this function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time.
	componentWillMount() {
		console.log('Testing componentWillMount lifecycle')
	}

	componentDidMount(): void {
		// Will be called only once when the component mounted the first time
		// for example make api call and update the state with data from api

		// The componentDidMount() method is called after the component is rendered.

		// Similarly as the previous one this function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time
		console.log('Testing componentDidMount lifecycle')
		this.getImages()
	}

	// 3. Updation: The following are the descriptions of functions that are invoked at different points of Updation phase.

	componentWillReceiveProps(
		nextProps: Readonly<PropsT>,
		nextContext: any,
	): void {
		// : This is a Props exclusive Function and is independent of States.

		console.log('Testing componentWillReceiveProps lifecycle')

		if (this.props !== nextProps) {
			console.log(' New Props have been assigned (componentWillReceiveProps) ')
			// Use this.setState() to rerender the page.
		}
	}

	shouldComponentUpdate(
		nextProps: Readonly<PropsT>,
		nextState: Readonly<StateT>,
		nextContext: any,
	): boolean {
		// By default, every state or props update re-render the page but this may not always be the desired outcome, sometimes it is desired that updating the page will not be repainted. The shouldComponentUpdate() Function fulfills the requirement by letting React know whether the component’s output will be affected by the update or not. shouldComponentUpdate() is invoked before rendering an already mounted component when new props or state are being received. If returned false then the subsequent steps of rendering will not be carried out. This function can’t be used in the case of forceUpdate(). The Function takes the new Props and new State as the arguments and returns whether to re-render or not.

		console.log('Testing shouldComponentUpdate lifecycle')

		return true
	}

	// this is legacy lifecycles now it will be removed
	getSnapshotBeforeUpdate(
		prevProps: Readonly<PropsT>,
		prevState: Readonly<StateT>,
	) {
		console.log('Testing getSnapshotBeforeUpdate lifecycle')
	}

	componentWillUpdate(
		nextProps: Readonly<PropsT>,
		nextState: Readonly<StateT>,
		nextContext: any,
	): void {
		// As the name clearly suggests, this function is invoked before the component is rerendered i.e. this function gets invoked once before the render() function is executed after the updation of State or Props.

		console.log('Testing componentWillUpdate lifecycle')
	}

	componentDidUpdate(
		prevProps: Readonly<PropsT>,
		prevState: Readonly<StateT>,
		snapshot?: any,
	): void {
		// Similarly this function is invoked after the component is rerendered i.e. this function gets invoked once after the render() function is executed after the updation of State or Props.

		console.log(
			'Testing componentDidUpdate lifecycle',
			' 	prevProps ',
			prevProps,
			' prevState ',
			prevState,
			' snapshot ',
			snapshot,
		)

		if (prevState.text === 'Testing Error Boundaries') {
			throw new Error('Testing Error Boundaries')
		}
	}

	// 4. Unmounting: This is the final phase of the lifecycle of the component that is the phase of unmounting the component   from the DOM. The following function is the sole member of this phase.

	componentWillUnmount(): void {
		// his function is invoked before the component is finally unmounted from the DOM i.e. this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle.
		console.log('Testing componentWillUnmount lifecycle')

		this.unsubscribeFromApiCall()
	}

	// 4. Error Handling Phase Methods
	public static getDerivedStateFromError = (error: Error): ErrorStateT => {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		// You can also log the error to an error reporting service
		// logErrorToMyService(error, errorInfo)
		console.error('Uncaught error:', error, errorInfo)
	}

	getImages = () => {
		let pinData: any[] = []
		this.unsubscribeFromApiCall = onSnapshot(
			query(collection(db, 'terms'), orderBy('timestamp', 'desc'), limit(5)),
			(snapshot: any) => {
				console.log('snapshot.docs', snapshot.docs)
				snapshot.docs.map((doc: any) => {
					console.log('doc.data()?.term', doc.data()?.term)
					const existingTermInFirebase = doc.data()?.term
					return getUnsplashImages(existingTermInFirebase || 'coding')
						.then((response: any) => {
							const searchResult = response.data.results
							pinData = [...searchResult, ...pinData]

							pinData = pinData.sort((a, b) => {
								return 0.5 - Math.random()
							})

							this.setState({
								pins: pinData,
							})
						})
						.catch((error) => {
							console.log(error)
						})
				})
			},
		)
	}

	onSearchSubmit(term: string) {
		getUnsplashImages(term)
			.then((response: any) => {
				const searchResult = response.data.results
				this.setState({
					pins: searchResult,
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}

	render() {
		console.log('Testing render lifecycle')

		return (
			<AuthConsumer>
				{({ user, isLoading, isError, isSuccess, logIn, logOut }) => {
					// console.log(user)
					return (
						<Wrapper>
							<Header onSubmit={this.onSearchSubmit} />
							<ErrorBoundary>
								<MainBoard pins={this.state.pins} />
							</ErrorBoundary>
						</Wrapper>
					)
				}}
			</AuthConsumer>
		)
	}
}

const Wrapper = styled.div`
	min-height: 100vh;
	width: 100%;
`
