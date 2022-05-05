import { combineReducers } from 'redux'
import { booksReducer } from './Reducers'

export const allReducers = combineReducers({
  books: booksReducer,
})
