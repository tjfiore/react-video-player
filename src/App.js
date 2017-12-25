import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



// youtube-api-key
const API_KEY = 'AIzaSyBB3IkIoIyyCcJukLX3qIK21PIvqN6ukms';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVid: null
    };

   this.videoSearch('amv');  //initial search
  }

   //get search term from search bar
  videoSearch(term){
    //get videos from youtube api
    YTSearch({key: API_KEY, term: term}, (videos) => {
      //this.setState({videos}); syntetic sugar  for
      this.setState({
        videos: videos,
        selectedVid: videos[0]
      })
    });
  }

  render() {
    const videoSearch = _.debounce(
      (term) => {this.videoSearch(term)},
      300   //search only runs every 300 milliseconds
    );

    return (
      <div>
      <SearchBar
      onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVid} />
      <VideoList
      onVideoSelect={selectedVid => this.setState({selectedVid}) }
      videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
