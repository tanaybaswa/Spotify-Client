import React from 'react';
import './App.css';
import { example_songs, playlistName, playlistTracks } from './example_songs';
import {SearchBar} from "../SearchBar/SearchBar";
import {SearchResults} from "../SearchResults/SearchResults";
import {Playlist} from "../Playlist/Playlist";
import Spotify from '../../util/Spotify';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistTracks: playlistTracks, 
      playlistName: playlistName
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){

    let plist = this.state.playlistTracks;
    if(plist.every(t => track.id !== t.id)){
      plist.push(track);

      this.setState({playlistTracks:plist});
    }
  }

  removeTrack(track){
    let plist = this.state.playlistTracks;
    plist = plist.filter(t => track.id !== t.id);

    this.setState({ playlistTracks: plist });
    
  }

  updatePlaylistName(newName){
    this.setState({playlistName:newName});
  }

  savePlaylist(){
    const trackUris = this.state.playlistTracks.map(t => t.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(()=>{
      this.setState({
        playlistName:"New Playlist",
        playlistTracks:[]
      });
    });
  }

  search(term){
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  render(){
    return (
    <div>
    <h1>Ja<span className="highLight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar onSearch = {this.search}/>
      <div className="c">
        <SearchResults onAdd = {this.addTrack}
        searchResults = {this.state.searchResults}/>
        <Playlist onSave = {this.savePlaylist}
        onChange = {this.updatePlaylistName} 
        onRemove = {this.removeTrack}
        playlistTracks = {this.state.playlistTracks}
        playlistName = {this.state.playlistName}/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
