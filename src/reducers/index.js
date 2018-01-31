import { combiner, combineReducers } from "redux";
import BooksReducer from "./reducer_books";

// THIS IS OUR MEGA STATE,REDUCER COMBINER BEFORE EXPRTING TO REACT
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
