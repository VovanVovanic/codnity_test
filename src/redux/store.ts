import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { articleReducer } from "./articles/reducer";
import { authReducer } from "./auth/reducer";
import { booksReducer } from "./books/reducer";



const reducers = combineReducers({
  auth: authReducer,
  books: booksReducer,
  articles: articleReducer
});

type rootReducerType = typeof reducers;
export type RootStateType = ReturnType<rootReducerType>;

// @ts-ignore
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, applyMiddleware(thunk));
export default store;