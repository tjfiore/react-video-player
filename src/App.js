import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBB3IkIoIyyCcJukLX3qIK21PIvqN6ukms'; // youtube-api-key

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos}); //synt sugar for this.setState({videos: videos})
    });
  }

  render() {
    return (
      <div>
      <SearchBar/>
      </div>
    );
  }
}

export default App;
