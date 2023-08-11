import PropTypes from "prop-types";

function BookShow(props) {
  const { book, handleDeleteBookById } = props;

  const handleOnClick = () => {
    handleDeleteBookById(book.id);
  };

  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button onClick={handleOnClick} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

BookShow.propTypes = {
  book: PropTypes.object.isRequired,
  handleDeleteBookById: PropTypes.func.isRequired,
};

export default BookShow;
