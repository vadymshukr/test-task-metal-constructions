import React from 'react';
import './Services.sass';

let bgimg = [
    {
        background: `url('./img/pics/card_bg_1.png') no-repeat center center`,
        backgroundSize: "cover"
    },
    {
        background: `url('./img/pics/card_bg_2.png') no-repeat center center`,
        backgroundSize: "cover"
    },
    {
        background: `url('./img/pics/card_bg_3.png') no-repeat center center`,
        backgroundSize: "cover"
    },
    {
        background: `url('./img/pics/card_bg_4.png') no-repeat center center`,
        backgroundSize: "cover"
    },
    {
        background: `url('./img/pics/card_bg_5.png') no-repeat center center`,
        backgroundSize: "cover"
    },
    {
        background: `url('./img/pics/card_bg_6.png') no-repeat center center`,
        backgroundSize: "cover"
    },
    {
        background: `url('./img/pics/card_bg_7.png') no-repeat center center`,
        backgroundSize: "cover"
    },
    {
        background: `url('./img/pics/card_bg_8.png') no-repeat center center`,
        backgroundSize: "cover"
    },    
];

let rotatedeg = 0;
const gears = document.getElementsByClassName('services__gear');

class Services extends React.Component {
    constructor(props){
        super(props);
    
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll(e){
        rotatedeg+=10;
        for (let el of gears){
            el.style.cssText = `--deg: ${rotatedeg}deg;`
        }
        
    }
    render(){
        return (
           <section className="services" >
               <div className="container">
                   <div className="services__gear services__gear_big-1"></div>
                   <div className="services__gear services__gear_big-2"></div>
                   <div className="services__gear services__gear_medium-1" ></div>
                   <div className="services__gear services__gear_medium-2" ></div>
                   <div className="services__gear services__gear_small-1" ></div>
                   <div className="services__gear services__gear_small-2" ></div>
                   <h2 className="services__tittle">Услуги</h2>
                   <div className="services__row">
                       <div className="services__card card" style={bgimg[0]}>
                            <p className="services__text">Производство оборудования</p>
                       </div>
                       <div className="services__card card" style={bgimg[1]}>
                            <p className="services__text">Металлическая мебель</p>
                       </div>
                       <div className="services__card card" style={bgimg[2]}>
                            <p className="services__text">Металлокнструкции</p>
                       </div>


                       <div className="services__card card" style={bgimg[3]}>
                            <p className="services__text">Металлообработка</p>
                       </div>
                       <div className="services__card card" style={bgimg[4]}>
                            <p className="services__text">Раскрой металла</p>
                       </div>
                       <div className="services__card card" style={bgimg[5]}>
                            <p className="services__text">Конструкторское бюро</p>
                       </div>


                       <div className="services__card services__card_big" style={bgimg[6]}>
                            <p className="services__text">Аренда техники</p>
                       </div>
                       <div className="services__card services__card_big" style={bgimg[7]}>
                            <p className="services__text">Ремонт техники</p>
                       </div>
                   </div>
                   <button className="services__button">Быстрый расчет цены по чертежу</button>
               </div>
           </section>
        );
    }
}   

export default Services;