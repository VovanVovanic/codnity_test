import { initState } from './reducer'
export const SET_AUTH = "SET_AUTH"
export const SET_LOADING = "SET_LOADING"
export const SET_MESSAGE = "SET_MESSAGE"


export type InitStateType  = typeof initState

export interface IMessage {
  status: number
  text: string
}

