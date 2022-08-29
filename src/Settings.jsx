import React, { Component } from "react";

export default class TaskList extends Component {

  render () {
    return(
      <div>
        <button onClick={this.props.saveTasks}>Save Progress</button>
        <button onClick={this.props.clearAll}>Clear All</button>
        <p>{this.props.remainingTasks()} {this.props.remainingTasks()>1? "tasks are" : "task"} Todo</p>
        <button onClick={this.props.clearAllDoneTasks}>Clear done tasks</button>
      </div>
    )
  }
}
