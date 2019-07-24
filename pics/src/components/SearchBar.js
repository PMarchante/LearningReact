import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div>
            <label>Image Search</label>
            <input type='text' placeholder='Search for..' />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
