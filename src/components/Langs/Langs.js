import React from 'react';
import './Langs.sass';
import ReactFlagsSelect from 'react-flags-select';
import './react-flags-select.scss';

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
        console.log(e.target)
    }
    render(){
        return (
            <ReactFlagsSelect
            defaultCountry="RU"
            countries={["GB", "RU", "UA"]}
            showOptionLabel={false}
            showSelectedLabel={false}
            selectedSize={24}
            optionsSize={24}/>
        );
    }
  
}

export default Langs;
