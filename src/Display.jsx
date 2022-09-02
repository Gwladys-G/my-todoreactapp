import React, { Component } from "react";

import BoredAPI from "./BoredAPI"
import TaskList from "./TaskList"


export default class Display extends Component {
  render(){
    return (
      <div className="container">
        <TaskList
          allTasks={this.props.allTasks}
          markAsCompleted={this.props.markAsCompleted}
          handleDelete={this.props.handleDelete}
        />
          <BoredAPI
            GetActivity={this.props.GetActivity}
            activity={this.props.activity}
            AddActivity={this.props.AddActivity}
            handleChange={this.props.handleChange}
          />
      </div>
    )
  }
}
