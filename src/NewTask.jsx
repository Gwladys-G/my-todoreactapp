import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

export default class NewTask extends Component{
  render () {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Stack direction="horizontal" gap={3}>
            <Form.Control type="input" placeholder="New Task title" name="title"
              value={this.props.newTask.title || this.props.activity || ""}
              onChange={this.props.handleChange}/>
            {!this.props.newTask.title? null : (
              <>
                <Button variant="primary" type="submit" className="mb-1 btn-sm ">
                  Add Task
                </Button>
              </>
            )}
          </Stack>
            {!this.props.newTask.title? null : (
          <>
            <Form.Control as="textarea" rows={3} name="description"
              placeholder="Add details"
              value={this.props.newTask.description || ""}
              onChange={this.props.handleChange}/>
          </>
          )}
      </Form.Group>
    </Form>
  )}
}
