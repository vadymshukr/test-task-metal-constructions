import React from 'react';
import './Lang.sass';
const langs = [
    {
        lang:'rus',
        flag:'./img/icons/RUS-flag.png',
        isActive: false
    },
    {
        lang:'eng',
        flag:'./img/icons/UK-flag.png',
        isActive: false
    },
    {
        lang:'ukr',
        flag:'./img/icons/UKR-flag.png',
        isActive: true
    }
]
let incativeLangs = [];

class Lang extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        console.log(e.target)
    }
    render(){
        return (
            <div className="lang-bar">
                {langs.map(el => {
                    if (el.isActive === true){
                        return <img src={el.flag} className="lang-bar__image"/>
                    } else {
                        incativeLangs.push(el)
                    }
                })}
                <div className="lang-bar__not-active lang-bar__not-active_hidden">
                    {incativeLangs.map(el => {
                            return <img src={el.flag} className="lang-bar__image" onClick={this.handleClick}/>
                    })}
                </div>
            </div>
        );
    }
  
}

export default Lang;
