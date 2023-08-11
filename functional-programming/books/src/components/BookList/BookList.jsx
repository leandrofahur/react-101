import PropTypes from "prop-types";

import BookShow from "components/BookShow/BookShow";

function BookList(props) {
  const { books, handleDeleteBookById } = props;

  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        handleDeleteBookById={handleDeleteBookById}
      />
    );
  });

  if (books.length === 0) {
    return <div className="book-list">There are no books</div>;
  }

  return <div className="book-list">{renderedBooks}</div>;
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  handleDeleteBookById: PropTypes.func.isRequired,
};

BookList.defaultProps = {};

export default BookList;
