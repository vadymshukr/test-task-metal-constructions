import React from 'react';
import './OurCompany.sass';

class OurCompany extends React.Component {
    render(){
        return (
           <section className="our-company" >
               <div className="container">
                   <h2 className="our-company__tittle">Наша компания</h2>
               </div>
               <div className="our-company__why">
                    <div className="our-company__card-wrapper">
                        <div className="our-company__card our-company__card_left">
                            <h3 className="our-company__tittle-card">Почему мы?</h3>
                            <p className="our-company__text">Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного</p>
                        </div>
                    </div>
               </div>
               <div className="our-company__advent">
                   <div className="our-company__card-wrapper">
                        <div className="our-company__card our-company__card_right">
                            <h3 className="our-company__tittle-card ">Наши преимущества</h3>
                            <p className="our-company__text">Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного</p>
                        </div>
                   </div>
                   
               </div>
           </section>
        );
    }
}   

export default OurCompany;