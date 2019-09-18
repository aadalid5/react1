import React from 'react';
import Card from './Card';

class Cardlist extends React.Component{
    constructor(props){
        super(props);
        
        const {robots, color} = this.props; // in index.js file we see that Carlist has two attributes: robots and color         
        this.Urobot = robots;  // or:  this.Urobot = this.props.robots
        this.Color = color;  // just and arbitrary prop for learning purposes

        //console.log(this.robot);
        //console.log(this.color);
    }

    showCards(user, i){
        return(
            <Card key = {i} name={user.name} email={user.email} id={user.id}/>
             );
    }

    render(){
        return (
            <div>
                {/*(3) iterative method  ---> */}                
                {this.Urobot.map(this.showCards)};                           
            </div> 
        );
    }
}

export default Cardlist;