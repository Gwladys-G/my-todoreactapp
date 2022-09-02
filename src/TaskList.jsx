import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


export default class TaskList extends Component {
  render () {
    return(
      <div className="taskslist">
        {this.props.allTasks.map((task) => (
              <Card className="mt-3">
                <Card.Header className="cardheader" style={{backgroundColor: task.completed ? 'darkgray' : 'white'}}>
                  <FontAwesomeIcon className="trash"icon={faTrash} onClick={()=>this.props.handleDelete(task.id)}></FontAwesomeIcon>
                  <p className="mb-0" style={{textAlign: 'end', fontSize: 'smaller',fontStyle: 'italic',textDecoration: task.completed ? 'line-through' : 'none'}}>{task.createdAt}</p>
                </Card.Header>
                <Card.Body style={{textDecoration: task.completed ? 'line-through' : 'none', backgroundColor: task.completed ? 'grey' : 'white'}}>
                  <Card.Title>{task.title}</Card.Title>
                  <Card.Text>
                    {!task.description? null : task.description}
                  </Card.Text>
                </Card.Body>
                {!task.completed? <Button className="btn btn-success m-3" variant="primary" onClick={()=> this.props.markAsCompleted(task.id)}> Mark as Completed</Button> : null}
              </Card>
        ))}
      </div>
    )
  }
}
