import React from 'react';
import './Footer.sass';

class Footer extends React.Component {
    render(){
        return (
           <section className="footer" >
               <div className="container">
                    <div className="footer__row">
                        <div className="footer__block">
                        <span className="footer__tittle">
                                    О компании
                                </span>
                            <ul className="footer__list">

                                <li className="footer__item">
                                    <a href="#" className="footer__link">Наши работы</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Контакты</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Доставка</a>
                                </li>
                                <li className="footer__item">         
                                    <a href="#" className="footer__link">Форма заказа</a>
                                </li>  
                            </ul>
                        </div>
                        <div className="footer__block footer__block_big">
                        <span className="footer__tittle">
                                    Услуги
                                </span>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Производство оборудования</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Металлическая мебель</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Металлокострукции</a>
                                </li>
                                <li className="footer__item">         
                                    <a href="#" className="footer__link">Металлообработка</a>
                                </li>  
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Раскрой металла</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Конструкторское бюро</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Аренда техники</a>
                                </li>
                                <li className="footer__item">         
                                    <a href="#" className="footer__link">Ремонт техники</a>
                                </li>  
                            </ul>
                        </div>
                        <div className="footer__block contacts">
                        <span className="footer__tittle">
                                    Контактная информация
                                </span>
                                <p className="contacts__adress">Заводская улица, 2В, Буча, Киевская область, 08292</p>
                                <p className="contacts__worktime">ПН - ПТ: <span className="contacts__num">09:00 - 18:00</span></p>
                                <p className="contacts__phone"><span className="contacts__num">+38 (097) 123-45-67</span></p>
                                <ul className="footer__social">
                                    <li className="footer__item-social">
                                        <a href="" className="footer__facebook"></a>
                                    </li>
                                    <li className="footer__item-social">
                                        <a href="" className="footer__insta"></a>
                                    </li>
                                    <li className="footer__item-social">
                                        <a href="" className="footer__tube"></a>
                                    </li>
                                    <li className="footer__item-social">
                                        <a href="" className="footer__gplus"></a>
                                    </li>
                                </ul>
                        </div>
                    </div>
               </div>
           </section>
        );
    }
}   

export default Footer;