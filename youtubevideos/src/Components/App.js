import React from 'react';
import Searchbar from './Searchbar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {
  state = { listVideos: [], selectedVideo: null };

  //default search term that will show a video app starts up
  componentDidMount() {
    this.onSearchSubmit('mouse');
  }
  onSearchSubmit = async (input) => {
    const response = await youtube.get('/search', { params: { q: input } });
    this.setState({
      listVideos: response.data.items,
      selectedVideo: response.data.items[0]
    });
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
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                vids={this.state.listVideos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
