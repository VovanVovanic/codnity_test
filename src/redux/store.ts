import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import thunk from "redux-thunk";
import { articleReducer } from "./articles/reducer";
import { booksReducer } from "./books/reducer";



const reducers = combineReducers({
  books: booksReducer,
  articles: articleReducer
});

type rootReducerType = typeof reducers;
export type RootStateType = ReturnType<rootReducerType>;
const middlewares = [thunk];


const store = createStore(reducers, applyMiddleware(...middlewares))
export default store;