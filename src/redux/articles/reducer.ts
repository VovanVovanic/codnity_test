
import { IMessage, SET_LOADING, SET_MESSAGE } from "../commonTypes";
import { ActionsArticlesType, iArticle, InitStateType, SET_ARTICLES, SET_TAG } from "./types";

export const initState = {
  isLoading: false,
  message: {status: 0 , text: ""} as IMessage,
  items: [] as Array<iArticle>,
  tag: null as null | string
}

export const articleReducer = (state: InitStateType = initState, action: ActionsArticlesType): InitStateType => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: action.payload}
    case SET_MESSAGE:
      return { ...state, message: action.payload }
    case SET_TAG:
      return { ...state, tag: action.payload}
    case SET_ARTICLES:
      return { ...state, items: action.payload}
    default:
      return state
  }
}