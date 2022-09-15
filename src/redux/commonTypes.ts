import { Action } from "redux"
import { ThunkAction } from "redux-thunk"
import { setLoading, setMessage } from "./articles/actions"
import { RootStateType } from "./store"

export const SET_LOADING = "SET_LOADING"
export const SET_MESSAGE = "SET_MESSAGE"

export enum Statuses {
  default = 0,
  message = 1,
  error = 3
}

export interface IMessage {
  status: number
  text: string
}

export type SetMessageType = ReturnType<typeof setMessage>
export type SetLoadingType = ReturnType<typeof setLoading>

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, RootStateType, unknown, A>