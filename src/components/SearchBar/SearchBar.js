import React from 'react';
import './SearchBar.sass';
let inputStatus = false;

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){

        if (inputStatus === false){
            inputStatus = true
        } else {
            inputStatus = false
        }
        this.props.updateSearch(inputStatus);
    }
    render(){
        return (
            <div className="search-bar">
                <img src="/img/icons/search.png" alt="" onClick={this.handleClick}/>
                {this.props.showInput &&
                     <input type="text" />
                }           
                
            </div>
        );
    }
  
}

export default SearchBar;
