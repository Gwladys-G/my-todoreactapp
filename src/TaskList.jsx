import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';


export default class TaskList extends Component {
  render () {
    return(
      <div>
        {this.props.allTasks.map((task) => (
            <Card className="my-2">
              <Card.Header className="cardheader">
                <CloseButton className="text-left mb-2" aria-label="Hide" onClick={() => this.props.handleDelete(task.id)}/>
                <p className="mb-0 font-italic" style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.createdAt}</p>
              </Card.Header>
              <Card.Body style={{textDecoration: task.completed ? 'line-through' : 'none', backgroundColor: task.completed ? 'grey' : 'white'}}>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>
                  {!task.description? null : task.description}
                </Card.Text>
                {!task.completed? <Button variant="primary" onClick={()=> this.props.markAsCompleted(task.id)}> Mark as Completed</Button> : null}
              </Card.Body>
            </Card>
        ))}
      </div>
    )
  }
}
