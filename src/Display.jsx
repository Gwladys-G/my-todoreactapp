import React, { Component } from "react";

import BoredAPI from "./BoredAPI"
import TaskList from "./TaskList"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default class Display extends Component {
  render(){
    return (
      <div className="container">
          {/* <Row>
            <Col> */}
            <TaskList
              allTasks={this.props.allTasks}
              markAsCompleted={this.props.markAsCompleted}
              handleDelete={this.props.handleDelete}
            />
            {/* </Col>
            <Col> */}
              <BoredAPI
                GetActivity={this.props.GetActivity}
                activity={this.props.activity}
                AddActivity={this.props.AddActivity}
                handleChange={this.props.handleChange}
              />
            {/* </Col>
          </Row> */}
      </div>
    )
  }
}
