import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
	children?: ReactNode
}

interface State {
	hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	}

	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	public static getDerivedStateFromError(error: Error): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		// You can also log the error to an error reporting service
		// logErrorToMyService(error, errorInfo)
		console.error('Uncaught error:', error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1>Caught an error from Testing Error Boundaries.</h1>
		}
		return this.props.children
	}
}
