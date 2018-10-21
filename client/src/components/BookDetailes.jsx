import React, { Component } from 'react';
import { graphql } from 'react-apollo';

//  Query Import
import { getBookQuery } from '../queries/queries'

class BookDetailes extends Component {
  render() {
    return (
      <div id="book-detailes">
        <p>Output book</p>
      </div>
    )
  }
}

export default graphql(getBookQuery)(BookDetailes);