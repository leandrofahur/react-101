import { useState } from "react";
import PropTypes from "prop-types";

function BookEdit(props) {
  const { book, handleOnSubmit } = props;

  const [title, setTitle] = useState(book.title);

  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleOnSubmit(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
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
  handleOnSubmit: PropTypes.func.isRequired,
};

BookEdit.defaultProps = {};

export default BookEdit;
