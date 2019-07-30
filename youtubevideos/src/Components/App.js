import React from "react";
import Searchbar from "./Searchbar";

class App extends React.Component {
  onSearchSubmit = input => {
    console.log(input);
  };

  render() {
    return (
      <div className='ui container'>
        <Searchbar submitFormFromApp={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
