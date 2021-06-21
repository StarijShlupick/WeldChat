import {EAuthMode, IAction} from "./types";

export const AuthReducer = (
		state = EAuthMode.signup,
		action: IAction
) => {
	switch (action.type) {
		case 'SIGNUP__AUTH-MODE':
			return EAuthMode.signup
		case 'LOGIN__AUTH-MODE':
			return EAuthMode.login
		default:
			return state
	}
}
