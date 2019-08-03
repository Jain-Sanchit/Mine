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
        name:"item1"
      },
      {
        id: 1,
        name:"item2"
      },
      {
        id:2 ,
        name:"item3"
      },
      {
        id:3 ,
        name:"item4"
      },
      {
        id: 4,
        name:"item5"
      }
    ]
  };
  }
   handleEvent =(event)=>{
   this.setState({
    todoList:[
      ...this.state.todoList,
      {
        id: this.state.todoList.length+1,
        name: event.target.value
      }
    ]
   });
  };
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
</div>
</div>


      {this.state.todoList.map(item=>(
          <Todolist title={item.name} />
      ))}

    </div>
    //<Todolist/>  not allowed , it must be within the first div , there can be only 1 div in root 
  );
  };
}

export default App;
