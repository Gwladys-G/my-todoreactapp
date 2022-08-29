import React, { Component } from "react";

export default class TaskList extends Component {
  render () {
    return(
      <ul>
        {this.props.allTasks.map(
          (task) => (
            <li
            key={task.id}
            >
              <div style={{textDecoration: task.completed ? 'line-through' : 'none',
                backgroundColor: task.completed ? 'grey' : 'none',}}>
                <h2
                 style={{backgroundColor: task.completed ? 'lightgrey' : 'none',}}>{task.title}</h2>
              </div>
              <div className="actions" style={{backgroundColor: task.completed ? 'grey' : 'none',}}>
                 <button onClick={() => this.props.handleDelete(task.id)}>X</button>
                {!task.completed? <button onClick={()=> this.props.markAsCompleted(task.id)}> Mark as Completed</button> : null}
              </div>
              <div style={{textDecoration: task.completed ? 'line-through' : 'none',
                backgroundColor: task.completed ? 'grey' : 'none',}}>
              {!task.description? null : <p>{task.description}</p>}
              <p>{task.createdAt}</p>
              </div>
            </li>)
        )}
      </ul>
    )
  }
}
