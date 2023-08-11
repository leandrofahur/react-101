import { useState } from "react";
import PropTypes from "prop-types";

function BookEdit(props) {
  const { book, setShowEdit, handleEditBookById } = props;

  const [title, setTitle] = useState(book.title);

  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleEditBookById(book.id, title);
    setShowEdit(false);
  };

  return (
    <form className="book-edit" onSubmit={handleOnSubmit}>
      <label>Title</label>
      <input
        type="text"
        className="input"
        value={title}
        onChange={handleOnChange}
      />
      <button className="button is-primary" type="submit">
        Save
      </button>
    </form>
  );
}

BookEdit.propTypes = {
  book: PropTypes.object.isRequired,
  setShowEdit: PropTypes.func.isRequired,
  handleEditBookById: PropTypes.func.isRequired,
};

BookEdit.defaultProps = {};

export default BookEdit;
