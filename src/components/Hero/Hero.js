import React from 'react';
import './Hero.sass';

let bgimg1 = [{
    background: `url('./img/pics/bg1.png') no-repeat center center`,
    backgroundSize: "cover"
},{
    background: `url('./img/pics/bg1.png') no-repeat center center`,
    backgroundSize: "cover"
},{
    background: `url('./img/pics/bg1.png') no-repeat center center`,
    backgroundSize: "cover"
},{
    background: `url('./img/pics/bg1.png') no-repeat center center`,
    backgroundSize: "cover"
}
];

let texsts= [
            "Высокоточное изготовление изделий из металла по чертежам",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            "Similique atque reiciendis odio cum sed voluptatum voluptates.", 
            "Veniam, suscipit nulla, totam sed dolores ea eveniet porro."

]
class Hero extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            bgimage: [
            `url('./img/pics/bg1.png') no-repeat center center`,
            `red`,
            `green`,
            `blue`],
            text: texsts[0]
    
        }

        this.handleClick = this.handleClick.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }

    handleClick(e){
        this.changeSlide(e.target.id)
    }

    changeSlide(i){
        document.getElementById('slider').setAttribute('style', `background: ${this.state.bgimage[i]}; background-size: cover;`);
        
        this.setState({
            text: texsts[i]
        });

        
        this.toggleClass(i*1);
        console.log(i);
    }

    toggleClass(index){
       for (let i = 0; i <= 3; i++){
            if (index === i){
                document.getElementById(`${i}`).setAttribute('style', `background-color: #E4B56B`)
            } else {
                document.getElementById(`${i}`).setAttribute('style', `background-color: white`)
            } 
       } 
    }
    render(){
        return (
           <section className="hero" id="slider" style={bgimg1[0]}>
               <div className="hero__description" >
                   <p className="hero__text" id="text" >{this.state.text}</p>
               </div>
               <div className="buttons-section">
                   {this.state.bgimage.map((el, i) => {
                       return (
                        <a className="buttons-section__button" href="#" id={i} onClick={this.handleClick} key={i}></a> 
                       )
                   })}
               </div>
           </section>
        );
    }
}   

export default Hero;