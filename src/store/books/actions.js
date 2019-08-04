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
import axios from "axios";

export const fetchBooks = () => {
  return dispatch => {};
};

export const getBooks = listOfBooks => {
  return dispatch => {
    dispatch({
      type: GET_BOOKS_PENDING
    });
    axios
      .get("http://localhost:8082/api/books/")
      .then(res => {
        dispatch({
          type: GET_BOOKS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: GET_BOOKS_FAILED,
          payload: err
        });
      });
  };
};

export const addBooksToCart = booksInCart => {
  return dispatch => {
    dispatch({
      type: ADD_BOOK_PENDING
    });
    axios
      .patch(`http://localhost:8082/api/books/cart/add/${id}`)
      .then(res => {
        dispatch({
          type: ADD_BOOK_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ADD_BOOK_FAILED,
          payload: err
        });
      });
  };
};

export const removeBookFromCart = updatedCart => {
  return dispatch => {
    dispatch({
      type: REMOVE_BOOK_PENDING
    });
    axios
      .patch(`http://localhost:8082/api/books/cart/remove/${id}`)
      .then(res => {
        dispatch({
          type: REMOVE_BOOK_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: REMOVE_BOOK_FAILED,
          payload: err
        });
      });
  };
};
