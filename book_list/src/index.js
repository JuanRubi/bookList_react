
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { books } from './Books';
import Book from './Book';

const Book_List = () => {
  return (
    <section className="bookList">
      {books.map((book) => {
        return (
          <Book {...book}></Book>
        )
      })}
    </section>
  )
};

ReactDOM.render(<Book_List />, document.getElementById('root'));
