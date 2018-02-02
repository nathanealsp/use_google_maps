import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'; // IMPORTING ACTION FOR BINDING TO THE CONTAINER, SO THAT ITS ABLE TO CREATE AN ACTION
import { bindActionCreators } from 'redux'; // FUNC BINDING OUR ACTION CREATOR TO THE CONTAINER..
// CREATE NEW COMPONENT
class BookList extends Component {
  // ACTION AND PASSING THIS BOOK
  renderList() {
    return this.props.books.map(book => (
      <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item bg-dark text-white"
      >
        {book.title}
      </li>
    ));
  }
  render() {
    return <ul className="list-group col-sm-4"> {this.renderList()} </ul>;
  }
}

// LINKING REDUX TO REACT

function mapStateToProps(state) {
  // THIS WILL SHOW UP AS PROPS IN BOOKS LIST.
  return {
    books: state.books,
  };
}

// ANYTHING RETURNED WILL END UP AS PROPS ON OUR BOOK LIST CONTAINER
function mapDispatchToProps(dispatch) {
  // WHENEVER selectBook IS CALLED, THE RESULT SHOULD BE PASSED
  // TO ALL OF OUR REDUCERS WITH THE DISPATCH function
  // THIS IS THE ACTION (SELECT BOOK ACTION)  bindActionCreators({selectBook:selectBook})
  return bindActionCreators(
    {
      selectBook,
    },
    dispatch,
  );
}

// RETURNING A CONTAINER
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
