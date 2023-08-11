import { useState } from "react";
import PropTypes from "prop-types";

function BookCreate(props) {
  const { handleCreateBook } = props;

  const [title, setTitle] = useState("");

  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleCreateBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleOnSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={handleOnChange}
          className="input"
        />
        <button className="button" type="submit">
          Create!
        </button>
      </form>
    </div>
  );
}

BookCreate.propTypes = {
  handleCreateBook: PropTypes.func.isRequired,
};

// BookCreate.defaultProps = {};

export default BookCreate;
