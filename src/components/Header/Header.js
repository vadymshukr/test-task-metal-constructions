import React from 'react';
import './Header.sass';


function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className="header-wrapper">
                <div className="logo">
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
                            <a href="#" className="menu__link">Услуги</a>
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
            </div>
            
        </div>
    </header>
  );
}

export default Header;
