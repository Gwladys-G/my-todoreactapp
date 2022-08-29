import { Component } from "react";
import NewTask from "./NewTask"
import TaskList from "./TaskList"
import Settings from "./Settings";

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
    e.preventDefault();
    if (!this.state.newTask.title) return;
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

  handleDelete = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      allTasks: prevState.allTasks.filter((task) => task.id !== id)
    }))
  }

  remainingTasks = () =>{
    return this.state.allTasks.filter(task => !task.completed).length
  }

  clearAllDoneTasks = () => {
    this.setState((prevState) => ({
      ...prevState,
      allTasks: prevState.allTasks.filter((task) => !task.completed)
    }))
  }

  render(){
    return (
      <div>
        <h1>Tasks</h1>
        <Settings
        saveTasks={this.saveTasks}
        clearAll={this.clearAll}
        remainingTasks={this.remainingTasks}
        clearAllDoneTasks={this.clearAllDoneTasks}
        />
        <NewTask
          newTask={this.state.newTask}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TaskList
          allTasks={this.state.allTasks}
          markAsCompleted={this.markAsCompleted}
          handleDelete={this.handleDelete}
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
