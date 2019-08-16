import React from'react'
import { directive } from '@babel/types';

class Todolist extends React.Component{
    
    render(){
        return(
            <div>
                <li 
                className={this.props.todo.striked ? "striked" : ""}
                onClick={() => this.props.handleClick(this.props.todo)} // if we write onClick={ this.props.handleClick(this.props.todo), this will run infinitley before clicking and thr will be error
                >                                                         
                {this.props.title}</li>
                 <button onClick={()=> this.props.handleDel(this.props.todo)}>Delete</button> 
            </div>
        );
        
    }
}

export default Todolist;