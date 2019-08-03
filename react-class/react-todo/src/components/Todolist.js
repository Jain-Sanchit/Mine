import React from'react'
import { directive } from '@babel/types';

class Todolist extends React.Component{

    render(){
        return(
            <div>
                <li>{this.props.title}</li>
            </div>
        );
        
    }
}

export default Todolist;