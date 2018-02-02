import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a movie for more details!</div>;
    }
    return (
      <div>
        <h1>
          Details for : <span>{this.props.book.title}</span>
        </h1>
        <h2>CAST</h2>
        <div>{this.props.book.actors}</div>
        <img src={this.props.book.image} alt="" srcSet="" />
        <div>{this.props.book.image}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // THIS WILL SHOW UP AS PROPS IN BOOKS LIST.
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateToProps)(BookDetail);
