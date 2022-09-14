import { BaseThunkType, SetLoadingType, SetMessageType } from "../commonTypes"
import { setBooksItems, setBooksType } from "./actions"
import { initState } from "./reducer"

export const GET_BOOKS = "GET_BOOKS"
export const SET_BOOK_TYPE = "SET_BOOK_TYPE"

export type InitStateType  = typeof initState

export interface IbookItem {
  _id: string,
  description: string
  author: string
  title: string
  url: string
}


type GetBooksType = ReturnType<typeof setBooksItems>
type SetBookType = ReturnType<typeof setBooksType>

export type ActionsBooksType = GetBooksType | SetMessageType | SetLoadingType | SetBookType

export type ThunkType = BaseThunkType<ActionsBooksType>
