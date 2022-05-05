import * as actions from './ActionsTypes'

const initialState = {
  books: [],
  favourite: window.localStorage.getItem('favourite')
    ? JSON.parse(window.localStorage.getItem('favourite'))
    : [],
}

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      }
    case actions.ADD_TO_FAVOURITE:
      const newBook = [...state.favourite, action.payload]
      window.localStorage.setItem('favourite', JSON.stringify(newBook))
      return {
        ...state,
        favourite: newBook,
      }
    case actions.REMOVE_FROM_FAVOURITE:
      const originalFav = state.favourite
      const filtredFav = originalFav.filter(
        (f) => f._version_ !== action.payload
      )
      return {
        ...state,
        favourite: filtredFav,
      }
    default:
      return state
  }
}
