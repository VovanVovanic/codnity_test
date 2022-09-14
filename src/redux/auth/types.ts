import { initState } from './reducer'
export const SET_AUTH = "SET_AUTH"



export type InitStateType  = typeof initState

export interface IMessage {
  status: number
  text: string
}

