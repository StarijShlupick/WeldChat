export interface IAction {
	type: string
	payload?: any
}
export enum EAuthMode {
	signup,
	login
}
export type TMessageProps = {
	key: number | string,
	message: object
}
