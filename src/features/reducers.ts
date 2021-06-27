import {EAuthMode, EThemeMode, IAction} from "./types";

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
export const ThemeModeReducer = (state = EThemeMode.light, action: IAction) => {
	switch (action.type) {
		case 'LIGHT__THEME-MODE':
			return EThemeMode.light
		case 'DARK__THEME-MODE':
			return EThemeMode.dark
		default:
			return state
	}
}
