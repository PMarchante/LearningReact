import React from 'react';
import Searchbar from './Searchbar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {
  state = { listVideos: [], selectedVideo: null };

  onSearchSubmit = async (input) => {
    const response = await youtube.get('/search', { params: { q: input } });
    this.setState({ listVideos: response.data.items });
  };

  onVideoSelect = (vids) => {
    this.setState({ selectedVideo: vids });
  };

  render() {
    return (
      <div className='ui container'>
        <div
          className='ui container'
          style={{ marginTop: 20, backgroundColor: 'red' }}>
          <Searchbar submitFormFromApp={this.onSearchSubmit} />
        </div>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          vids={this.state.listVideos}
        />
      </div>
    );
  }
}

export default App;
