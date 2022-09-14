import { initState } from "./reducer"

export const GET_BOOKS = "GET_BOOKS"


export type InitStateType  = typeof initState

export interface IbookItem {
  id: string,
  description: string
  title: string
  pictureUrl: string
}


 
