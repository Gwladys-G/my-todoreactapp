import React, { Component } from "react";

export default class TaskList extends Component {
  render () {
    return(
      <ul>
        {this.props.allTasks.map(
          (task) => (
            <li>
              <div>
                <h2>{task.title}</h2>
                <button> Mark as Completed</button>
              </div>
              {!task.description? null : <p>{task.description}</p>}
            </li>)
        )}
      </ul>
    )
  }
}
