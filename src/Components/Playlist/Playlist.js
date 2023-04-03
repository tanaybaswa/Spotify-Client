import React from "react";
import "./Playlist.css";
import { TrackList } from "../TrackList/TrackList";

export class Playlist extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        let newName = event.target.value;
        this.props.onChange(newName);
    }
    render(){

        return(
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange = {this.handleChange}/>
                <TrackList isRemoval = {true}
                onRemove = {this.props.onRemove} tracks = {this.props.playlistTracks}/>
                <button onClick = {this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}