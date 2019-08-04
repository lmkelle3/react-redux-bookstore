import {
  GET_BOOKS_PENDING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILED,
  ADD_BOOK_PENDING,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILED,
  REMOVE_BOOK_PENDING,
  REMOVE_BOOK_SUCCESS,
  REMOVE_BOOK_FAILED
} from "./constants";

let initialState = [];

export default ((state = initialState), action) {
    switch (action.type) {
        case GET_BOOKS_PENDING:
            return state
        case GET_BOOKS_SUCCESS:
            let listOfBooks = action.payload
            return [...state, listOfBooks]
        case GET_BOOKS_FAILED:
            return action.payload

        case ADD_BOOK_PENDING:
            return state
        case ADD_BOOK_SUCCESS:
            return state.filter(book => book.id == action.payload.id)
        case ADD_BOOK_FAILED:
            return action.payload
        default:
            return state
    }
};
