import { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        className={this.props.className}
        type='search'
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
