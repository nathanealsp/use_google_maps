import React, { Component } from "react";
import { connect } from "react-redux";

// CREATE NEW COMPONENT
class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// LINKING REDUX TO REACT

function mapStateToProps(state) {
  //THIS WILL SHOW UP AS PROPS IN BOOKS LIST.
  return {
    books: state.books
  };
}

// RETURNING A CONTAINER
export default connect(mapStateToProps)(BookList);
