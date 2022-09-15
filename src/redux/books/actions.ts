import { Dispatch } from "redux"
import { addBook, deleteBook, getArticles, getBooks, updateBook } from "../../api"
import { FormikErrorType } from "../../modules/bookForm"
import { setLoading, setMessage } from "../articles/actions"
import {  Statuses } from "../commonTypes"
import { RootStateType } from "../store"
import { GET_BOOKS, IbookItem, SET_BOOK_TYPE } from "./types"



export const setBooksItems = (items: Array<IbookItem>) => ({ type: GET_BOOKS, payload: items } as const)
export const setBooksType = (type:string) => ({ type: SET_BOOK_TYPE, payload: type} as const)

export const fetchBooks= (): any => async (dispatch: Dispatch, getState: ()=>RootStateType) => {
  dispatch(setLoading(true))
  const type = getState().books.type 
  try {
    const res = await getBooks(type)
    if (res) {
      dispatch(setBooksItems (res))
    }
  }
  catch (e:any) {
    dispatch(setMessage({status: Statuses.error, text: e}))
  }
  dispatch(setLoading(false))
}

export const fetchDeleteBook= (id:string): any => async (dispatch: Dispatch) => {
  dispatch(setLoading(true))
  try {
    const res = await deleteBook(id)
    if (res) {
      dispatch(fetchBooks())
    }
  }
  catch (e:any) {
    dispatch(setMessage({status: Statuses.error, text: e}))
  }
  dispatch(setLoading(false))
}

export const fetchUpdateBook= (id:string, data: FormikErrorType): any => async (dispatch: Dispatch) => {
  dispatch(setLoading(true))
  try {
    const res = await updateBook(id, data)
    if (res) {
      dispatch(fetchBooks())
    }
  }
  catch (e:any) {
    dispatch(setMessage({status: Statuses.error, text: e}))
  }
  dispatch(setLoading(false))
}

export const fetchAddBook= (data: FormikErrorType): any => async (dispatch: Dispatch) => {
  dispatch(setLoading(true))
  try {
    const res = await addBook(data)
    if (res) {
      dispatch(fetchBooks())
    }
  }
  catch (e:any) {
    dispatch(setMessage({status: Statuses.error, text: e}))
  }
  dispatch(setLoading(false))
}