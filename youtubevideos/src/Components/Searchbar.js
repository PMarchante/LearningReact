import React from "react";

class Searchbar extends React.Component {
  state = { searchInput: "" };

  inputChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.submitFormFromApp(this.state.searchInput);
  };
  render() {
    return (
      <div className='ui segment'>
        <h1>Youtube clone</h1>
        <form className='ui form' onSubmit={this.submitForm}>
          <label>Video search</label>
          <input
            type='text'
            value={this.state.searchInput}
            onChange={this.inputChange}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
