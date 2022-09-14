import { IMessage} from "../auth/types"
import { SET_LOADING, SET_MESSAGE } from "../commonTypes"
import { IbookItem, GET_BOOKS, InitStateType, SET_BOOK_TYPE, ActionsBooksType } from "./types"


export const initState = {
  isLoading: false,
  message: {status: 0 , text: ""} as IMessage,
  books: [] as Array<IbookItem>,
  type: ""
}


export const booksReducer = (state: InitStateType = initState, action: ActionsBooksType): InitStateType => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload }
    case SET_LOADING:
      return {...state, isLoading: action.payload}
    case SET_MESSAGE:
      return { ...state, message: action.payload }
    case SET_BOOK_TYPE:
      return { ...state, type: action.payload}
    default:
      return state
  }
}