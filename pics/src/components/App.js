import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  //initialize the state with an empty array
  state = { images: [] };

  //use the async keyword to let us use the await axios
  onSearchSubmit = async (term) => {
    //the website will specify where we cant to make a network request
    //this will make a request to the unsplash API documentation on their website
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
