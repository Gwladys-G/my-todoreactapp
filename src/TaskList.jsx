import React, { Component } from "react";

export default class TaskList extends Component {
  render () {
    return(
      <ul>
        {this.props.allTasks.map(
          (task) => (
            <li
            key={task.id}
            style={{textDecoration: task.completed ? 'line-through' : 'none',
                backgroundColor: task.completed ? 'grey' : 'none',}}
            >
              <div>
                <h2
                 style={{backgroundColor: task.completed ? 'lightgrey' : 'none',}}>{task.title}</h2>
                {!task.completed? <button onClick={()=> this.props.markAsCompleted(task.id)}> Mark as Completed</button> : null}
              </div>
              {!task.description? null : <p>{task.description}</p>}
              <p>{task.createdAt}</p>
            </li>)
        )}
      </ul>
    )
  }
}
