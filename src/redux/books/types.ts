import { initState } from "./reducer"

export const GET_BOOKS = "GET_BOOKS"
export const SET_LOADING = "SET_LOADING"
export const SET_MESSAGE = "SET_MESSAGE"

export type InitStateType  = typeof initState

export interface IbookItem {
  id: string,
  description: string
  title: string
  pictureUrl: string
}

export enum Statuses {
  default = 0,
  message = 1,
  error = 3
}
 
