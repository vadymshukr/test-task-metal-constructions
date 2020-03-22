import React from 'react';
import './Header.sass';
import SearchBar from '../SearchBar/SearchBar';
import Langs from '../Langs/Langs'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showInput: false
        }
        this.updateSearch = this.updateSearch.bind(this);
    }
    updateSearch(data){
        if (data === true){
            this.setState({
                showInput: true
            })
        } else {
            this.setState({
                showInput: false
            })
        }
        
    }
    render(){
        return (
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo header__logo">
                            <a href="#" className="logo__link">
                                <img src="img/icons/logo.png" alt="" className="logo__image"/>
                            </a>
                        </div>
                        <nav className="menu">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Главная</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link menu__link_with-arrow">Услуги

                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Наши работы</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">О нас</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__icons">
                            <SearchBar showInput={this.state.showInput} updateSearch={this.updateSearch}/>
                            <Langs />
                        </div>
                       
                        
                    </div>
                        
                </div>
            </header>
        );
    }
}   

export default Header;
