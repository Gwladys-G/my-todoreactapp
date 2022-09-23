import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



  export default class Settings extends Component {

    handleSelect = (eventKey) => alert(`${eventKey}`)

    render (){
      return (
        <div>
          <Nav variant="pills" activeKey="1" onSelect={this.handleSelect} className= "mt-3 mb-2">
            <Nav.Item>
              <Nav.Link eventKey="Progress has been Saved !" onClick={this.props.saveTasks}>
                <Button variant="outline-success">Save Progress</Button>{' '}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btn btn-outline-secondary" eventKey="All tasks will been cleared" onClick={this.props.clearAll}>
                <Button variant="outline-danger">Clear all tasks</Button>{' '}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="All done tasks are going to be cleared" onClick={this.props.clearAllDoneTasks}>
                <Button variant="outline-warning">Clear done tasks</Button>{' '}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      )
    }
  }
