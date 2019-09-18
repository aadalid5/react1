import React from 'react';
import Card from './Card';

class Cardlist extends React.Component{
    constructor(props){
        super(props);
        //*********************************************************************//
        //(1)asign individually,   ---- //
        //console.log(props);
        /* 
        this.name = this.props.robots[0].name;
        this.email = this.props.robots[0].email;
        this.id = this.props.robots[0].id; */

        //*********************************************************************//
        //(2) another way of asignation ----//
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
                {/* without using the constructor ---> */ }
                {/* {[ <Card key={0} name={this.props.robots[0].name} email={this.props.robots[0].email} id={this.props.robots[0].id}/>,
                    <Card key={1} name={this.props.robots[1].name} email={this.props.robots[1].email} id={this.props.robots[1].id}/> ]} */}
                
                {/*(1) other method, using the constructor, and asign individualy  ----> */}
                {/* <Card name={this.name} email={this.email} id={this.id}/> */}

                {/*(2) other method, using the constructor ----> */}
                {/* <Card name={this.Urobot[0].name} email={this.Urobot[0].email} id={this.Urobot[0].id}/> */}

                {/*(3) iterative method  ---> */}
                               
                {this.Urobot.map(this.showCards)};

                
                                                               
            </div> 
        );
    }
}

export default Cardlist;