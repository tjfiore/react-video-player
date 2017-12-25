import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBB3IkIoIyyCcJukLX3qIK21PIvqN6ukms'; // youtube-api-key

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'amv'}, (videos) => {
      this.setState({videos}); //syntetic sugar for this.setState({videos: videos})
    });

}

  render() {
    return (
      <div>
      <SearchBar />
      <VideoDetail video={this.state.videos[1]} />
      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
