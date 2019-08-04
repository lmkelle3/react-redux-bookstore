import { createStore, combineReducers, applyMiddleware } from "redux";
import booksReducer from "./books/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  books: booksReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
