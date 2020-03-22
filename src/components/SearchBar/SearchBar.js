import React from 'react';
import './SearchBar.sass';
let inputStatus = false;

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let element = document.querySelector('#search')
        if (inputStatus === false){
            inputStatus = true
            element.classList.toggle('anim');
        } else {
            inputStatus = false
            element.classList.toggle('anim');
        }
        this.props.updateSearch(inputStatus);
    }
    render(){
        return (
            <div className="search-bar">
                <img src="/img/icons/search.png" alt="" onClick={this.handleClick} className="search-bar__image" id="search"/>
                {this.props.showInput &&
                     <input type="text" className="search-bar__input"/>
                }           
                
            </div>
        );
    }
  
}

export default SearchBar;
