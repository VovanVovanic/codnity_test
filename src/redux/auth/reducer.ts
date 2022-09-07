import { IMessage, SET_LOADING, SET_MESSAGE, SET_AUTH, InitStateType } from "./types"

export const initState = {
  isLoading: false,
  message: {status: 0 , text: ""} as IMessage,
  auth: true,
}


export const authReducer = (state: InitStateType = initState, action: any): InitStateType => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: action.payload}
    case SET_MESSAGE:
      return { ...state, message: action.payload}
    case SET_AUTH:
      return { ...state, auth:action.payload}
    default:
      return state
  }
}