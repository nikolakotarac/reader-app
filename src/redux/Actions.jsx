import * as actions from './ActionsTypes'

export const fetchBooksAction = (books) => {
  return {
    type: actions.FETCH_BOOKS,
    payload: books,
  }
}

export const addFavouriteAction = (book) => {
  return {
    type: actions.ADD_TO_FAVOURITE,
    payload: book,
  }
}

export const RemoveFromFavouriteAction = (id) => {
  return {
    type: actions.REMOVE_FROM_FAVOURITE,
    payload: id,
  }
}
