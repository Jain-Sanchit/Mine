import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
    todoList: [
      {
        id: 0,
        name:"item1",
        striked: false
      },
      {
        id: 1,
        name:"item2",
        striked: false
      },
      {
        id:2 ,
        name:"item3",
        striked: false
      },
      {
        id:3 ,
        name:"item4",
        striked: false
      },
      {
        id: 4,
        name:"item5",
        striked: false
      }
    ],
    inputValue: ""
  };
  }
   handleEvent =(event)=>{
   this.setState({
    inputValue: event.target.value
   });
  };

  handleOnClick=()=>{
    this.setState({
      todoList:[
        ...this.state.todoList,
        {
          id: this.state.todoList.length+1,
          name: this.state.inputValue,
          striked: false
        }
      ]
    });
  };
  handleToggle = todo => {
    let todoList = this.state.todoList.map(item => {
      if (item.id === todo.id) {
        return {
          id: item.id,
          name: item.name,
          striked: !item.striked
        };
      } else {
        return item;
      }
    });
    this.setState({
      todoList
    });
  };
  handleDelete1=todo=>{
    let todoList=this.state.todoList.filter(
      item=> {
       if(item.id !== todo.id){
         
         return {
          id: item.id,
          name: item.name,
          striked: item.striked
          };
         }
       }
      
      
    );
    this.setState({
     todoList
   });
  }

 handleDelete=todo=>{
   let todoList=this.state.todoList.filter(
     item=> {
      if(!item.striked){
        return{
        id: item.id,
        name: item.name,
        striked: item.striked
        };
      }
     }
     
   );
   this.setState({
    todoList
  });
 }

  render(){ 

     return (
    
    <div className="App">
      <h1>Todo List</h1>

      <div class="input-group mb-3">
  <div class="input-group-prepend mt-4" style={{ marginLeft: "47%"}}>
    
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
  style={{width: "60%"}}
  
   onChange={this.handleEvent}
  />

   <button onClick={this.handleOnClick}>Submit</button> 
  
</div>
</div>


      {this.state.todoList.map(item=>(
          <Todolist 
                title={item.name}
                handleClick={this.handleToggle}
                //todo={item}
                handleDel={this.handleDelete1}
                todo={item}
             />
          
      ))}
<br></br>
<div><button onClick={this.handleDelete}>Delete</button></div>
    </div>

    
    //<Todolist/>  not allowed , it must be within the first div , there can be only 1 div in root 
  );
  };
}

export default App;
