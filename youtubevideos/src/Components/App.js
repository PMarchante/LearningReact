import React from 'react';
import Searchbar from './Searchbar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
class App extends React.Component {
  state = { listVideos: [] };

  onSearchSubmit = async (input) => {
    const response = await youtube.get('/search', { params: { q: input } });
    this.setState({ listVideos: response.data.items });
  };

  render() {
    return (
      <div className='ui container'>
        <div
          className='ui container'
          style={{ marginTop: 20, backgroundColor: 'red' }}>
          <Searchbar submitFormFromApp={this.onSearchSubmit} />
        </div>
        <VideoList vids={this.state.listVideos} />
      </div>
    );
  }
}

export default App;
