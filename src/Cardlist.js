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
        //(2) another manner of asignation ----//
        const {robots, color} = this.props; 
        this.Urobot = robots;
        this.Color = color;  // just and arbitrary prop for learning purposes
        //console.log(this.robot);
        //console.log(this.color);
        
    }

    showCards(user, i){
        return(
            <Card name={user.name} email={user.email} id={user.id}/>
            );

    }

    render(){
        return (
            <div>
                {/* without using the constructor ---> */ }
                {/* <Card name={this.props.robots[0].name} email={this.props.robots[0].email} id={this.props.robots[0].id}/> */}
                
                {/*(1) other method, using the constructor, asign individualy  ----> */}
                {/* <Card name={this.name} email={this.email} id={this.id}/> */}

                {/*(2) other method, using the constructor ----> */}
                {/* <Card name={this.Urobot[0].name} email={this.Urobot[0].email} id={this.Urobot[0].id}/> */}

                {/*(3) iterative method  ---> */}
                {/* {this.Urobot.map((user,i) =>{
                    return(
                    <Card name={user.name} email={{this.Urobot.map((user,i) =>{
                    return(
                    <Card name={user.name} email={user.email} id={user.id}/>
                    );
                })
                }ser.email} id={user.id}/>
                    );
                })
                } */}
                
                {this.Urobot.map(this.showCards)};
                                                               
            </div> 
        );
    }
}

export default Cardlist;