import { Component } from "react";
import NewTask from "./NewTask"

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      newTask: {},
      allTasks: []
    };
  }

  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      newTask: {
        ...prevState.newTask,
        [e.target.name]: e.target.value,
        id: Date.now()
      }
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.allTasks);
    this.setState((prevState) => ({
      allTasks: [...prevState.allTasks, prevState.newTask],
      newTask: {}
    }));
    console.log(this.state.allTasks);
  }


  render(){
    return (
      <div>
        <h1>Tasks</h1>
        <NewTask
        newTask={this.state.newTask}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
      </div>
    )
  };
}


//clear to dos function
//toggle todos function
//number of todos left
//connect to bored API
//click to get ideas and ability to add to list
//load and save to localstorage?
