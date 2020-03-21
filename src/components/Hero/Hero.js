import React from 'react';
import './Hero.sass';

let bgimg1 = {
    background: `url('./img/pics/bg1.png') no-repeat center center`,
    backgroundSize: "cover"
};

class Hero extends React.Component {
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
           <section className="hero" style={bgimg1}>
               <div className="hero__description" >
                  
                   <p className="hero__text">Высокоточное изготовление изделий из металла по чертежам</p>
                  
                   
               </div>
               <div className="buttons-section">
                   <a className="buttons-section__button" href="#"></a>
                   <a className="buttons-section__button" href="#"></a>
                   <a className="buttons-section__button" href="#"></a>
                   <a className="buttons-section__button" href="#"></a>
               </div>
           </section>
        );
    }
}   

export default Hero;