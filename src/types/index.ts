export interface PinT {
	urls?: {
		regular?: string
	}
}

export type PinsT = PinT[]

export interface AuthT {
	email: string
	displayName: string
	uid?: string
	photoURL: string
}

export interface AuthContextInterface {
	user: AuthT | null
	isLoading: boolean
	isError: boolean
	isSuccess: boolean
	logIn: (user: AuthT) => void
	logOut: () => void
}
