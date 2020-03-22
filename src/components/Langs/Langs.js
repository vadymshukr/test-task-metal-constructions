import React from 'react';
import './Langs.sass';

const langs = [
    {
        lang:'rus',
        flag:'./img/icons/RUS-flag.png',
    },
    {
        lang:'eng',
        flag:'./img/icons/UK-flag.png',
    },
    {
        lang:'ukr',
        flag:'./img/icons/UKR-flag.png',
    }
]

class Langs extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let element = document.querySelector('#flag');
        element.classList.toggle('langs__list_open');
        console.log(e.target)
    }
    render(){
        return (
            <div className="langs">
                <img src={langs[2].flag} alt="" className="langs__flag langs__flag_main"  onClick={this.handleClick}/>
                <ul className="langs__list" id="flag">
                    <li className="langs__item"><img src={langs[1].flag} alt="" className="langs__flag"/></li>
                    <li className="langs__item"><img src={langs[0].flag} alt="" className="langs__flag"/></li>
                </ul>
            </div>
        );
    }
  
}

export default Langs;
