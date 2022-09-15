import { BaseThunkType, SetLoadingType, SetMessageType } from '../commonTypes'
import { setArticlesItems, setType } from './actions'
import { initState } from './reducer'
export const SET_ARTICLES = "SET_ARTICLES"
export const SET_TAG = "SET_TAG"
export type InitStateType = typeof initState

export interface iArticle {
  title: string
  text: string
  tags: Array<string>
  user: {userName: string}
  createdAt: any
}

type GetArticlesType = ReturnType<typeof setArticlesItems>
type SetTagType = ReturnType<typeof setType>

export type ActionsArticlesType = GetArticlesType | SetMessageType | SetLoadingType | SetTagType 

export type ThunkType = BaseThunkType<ActionsArticlesType >