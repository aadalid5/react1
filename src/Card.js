import React from 'react';
import 'tachyons';
import './Card.css';



class Card extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return (
            <div className="myclass1 bg-light-green dib br3 pa2 ma2 grow shadow-4 bw2">
                
                <img src={`https://robohash.org/robo+${this.props.id}`} alt="avatar"></img>
                <h2>{this.props.name} </h2>
                <p>{this.props.email}</p>

            </div>
        )
    }
}



export default Card;