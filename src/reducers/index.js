import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import activeBook from './reducer_active_book';

// THIS IS OUR MEGA STATE,REDUCER COMBINER BEFORE EXPRTING TO REACT
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook,
});
// ActiveBook: ActiveBook
export default rootReducer;
