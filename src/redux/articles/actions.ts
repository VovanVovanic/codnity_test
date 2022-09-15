
import { Dispatch } from "redux"
import { getArticles } from "../../api"
import { IMessage, SET_LOADING, SET_MESSAGE, Statuses } from "../commonTypes"
import { RootStateType } from "../store"
import { iArticle, SET_ARTICLES, SET_TAG, ThunkType } from "./types"


export const setArticlesItems = (items: Array<iArticle>) => ({ type: SET_ARTICLES, payload: items } as const)
export const setMessage = (message: IMessage) => ({ type: SET_MESSAGE, payload: message } as const)
export const setLoading = (loading: boolean) => ({ type: SET_LOADING, payload: loading } as const)
export const setType = (type:string) => ({ type: SET_TAG, payload: type} as const)

export const fetchArticles = (): any => async (dispatch: Dispatch, getState: ()=>RootStateType) => {
  dispatch(setLoading(true))
  const tag = getState().articles.tag ? getState().articles.tag : null
  try {
    const res = await getArticles(tag)
   
    if (res) {
      const sorted = res.sort((a, b) => a.title.localeCompare(b.title))
      dispatch(setArticlesItems(sorted))
    }
  }
  catch (e:any) {
    dispatch(setMessage({status: Statuses.error, text: e}))
  }
  dispatch(setLoading(false))
}


