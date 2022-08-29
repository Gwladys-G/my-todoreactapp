import { Component } from "react";
import NewTask from "./NewTask"
import TaskList from "./TaskList"

const LOCAL_STORAGE_KEY= 'todoApp.todos'

export default class App extends Component {

  constructor(props){
    super(props);
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    this.state = {
      newTask: {},
      allTasks: storedTasks? storedTasks : [],
    };
  }


  saveTasks = () => {
    console.log("savviiing");
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(this.state.allTasks))
  }

  clearAll = () => {
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    this.setState((prevState) => ({
      allTasks: [],
      newTask: {}
    }));
  }

  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      newTask: {
        ...prevState.newTask,
        [e.target.name]: e.target.value,
        id: Date.now(),
        createdAt: new Date().toDateString(),
        completed: false
      }
    }));
  }

  handleSubmit = (e) => {
    console.log(e.target)
    e.preventDefault();
    this.setState((prevState) => ({
      allTasks: [...prevState.allTasks, prevState.newTask],
      newTask: {}
    }));
  }

  markAsCompleted = (id) => {
    const updatedTasks = this.state.allTasks.map(task => {
      if (task.id === id){
        return {...task, completed:true};
      }
      return task;
    });
    this.setState((prevState) => ({
      ...prevState,
      allTasks: updatedTasks
    }))
  }


  render(){
    return (
      <div>
        <h1>Tasks</h1>
        <button onClick={this.saveTasks}>Save Progress</button>
        <button onClick={this.clearAll}>Clear All</button>
        {/* <button onClick={this.loadData}>getmypastwork</button> */}
        <NewTask
          newTask={this.state.newTask}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TaskList
          allTasks={this.state.allTasks}
          markAsCompleted={this.markAsCompleted}
        />
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
