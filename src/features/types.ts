export interface IAction {
	type: string
	payload?: any
}
export enum EAuthMode {
	signup,
	login
}
