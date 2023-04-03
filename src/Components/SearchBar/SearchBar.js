import React from "react";
import { ReactDOM } from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {term:null};
    }

    search(term){
        this.props.onSearch(term);
    }

    handleSearch(event){
        let newTerm = event.target.value;
        this.search(newTerm);
    }

    render(){
        return (
            <div className="SearchBar">
                <input onChange={this.handleSearch}
                placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }
}