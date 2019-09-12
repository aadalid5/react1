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

    render(){
        return (
            <div>
                {/* without using the constructor ---> */ }
                {/* <Card name={this.props.robots[0].name} email={this.props.robots[0].email} id={this.props.robots[0].id}/> */}
                
                {/*(1) other method, using the constructor, asign individualy */}
                {/* <Card name={this.name} email={this.email} id={this.id}/> */}

                {/*(2) other method, using the constructor  */}
                <Card name={this.Urobot[0].name} email={this.Urobot[0].email} id={this.Urobot[0].id}/>
                <Card name={this.Urobot[1].name} email={this.Urobot[1].email} id={this.Urobot[1].id}/>
                <Card name={this.Urobot[2].name} email={this.Urobot[2].email} id={this.Urobot[2].id}/>
                                
            </div> 
        );
    }
}

export default Cardlist;