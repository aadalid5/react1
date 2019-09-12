import React from 'react';
import Card from './Card';

class Cardlist extends React.Component{
    constructor(props){
        super()
        
    }

    render(){
        return (
            <div>
                <Card name={this.props.robots[0].name} email={this.props.robots[0].email} id={this.props.robots[0].id}/>
                <Card name={this.props.robots[1].name} email={this.props.robots[1].email} id={this.props.robots[1].id}/>
                <Card name={this.props.robots[2].name} email={this.props.robots[2].email} id={this.props.robots[2].id}/>
                
                
            </div> 
        );
    }
}

export default Cardlist;