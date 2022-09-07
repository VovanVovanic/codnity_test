import { IMessage, SET_LOADING, SET_MESSAGE } from "../auth/types"
import { IbookItem, GET_BOOKS, InitStateType } from "./types"


export const initState = {
  isLoading: false,
  message: {status: 0 , text: ""} as IMessage,
  books: [] as Array<IbookItem >,
}


export const booksReducer = (state: InitStateType = initState, action: any): InitStateType => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload }
    case SET_LOADING:
      return {...state, isLoading: action.payload}
    case SET_MESSAGE:
      return { ...state, message: action.payload}
    default:
      return state
  }
}