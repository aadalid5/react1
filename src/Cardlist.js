import React from 'react';
import Card from './Card';

class Cardlist extends React.Component{
    constructor(props){
        super(props);
        this.name = this.props.robots[0].name;
        this.email = this.props.robots[0].email;
        this.id = this.props.robots[0].id;
        
    }

    render(){
        return (
            <div>
                <Card name={this.name} email={this.email} id={this.id}/>
                {/* <Card name={this.props.robots[0].name} email={this.props.robots[0].email} id={this.props.robots[0].id}/>
                <Card name={this.props.robots[1].name} email={this.props.robots[1].email} id={this.props.robots[1].id}/>
                <Card name={this.props.robots[2].name} email={this.props.robots[2].email} id={this.props.robots[2].id}/> */}
                
                
            </div> 
        );
    }
}

export default Cardlist;