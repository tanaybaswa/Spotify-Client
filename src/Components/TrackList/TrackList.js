import React from "react";
import { Track } from "../Track/Track";
import "./TrackList.css";

export class TrackList extends React.Component{

    renderTracks(){
        let list = this.props.tracks.map(track=><Track 
            track = {track} key = {track.id}
            isRemoval = {this.props.isRemoval}
            onAdd = {this.props.onAdd}
            onRemove = {this.props.onRemove}/>);
        return list;
    }


    render(){
        return (
            <div className="TrackList">
                {this.renderTracks()}
            </div>
        );
    }
}