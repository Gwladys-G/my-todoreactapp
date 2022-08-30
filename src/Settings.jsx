import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';


  export default class Settings extends Component {

    handleSelect = (eventKey) => alert(`${eventKey}`)

    render (){
      return (
        <div>
          <Nav variant="pills" activeKey="1" onSelect={this.handleSelect} className= "m-2">
            <Nav.Item>
              <Nav.Link eventKey="Progress has been Saved !" onClick={this.props.saveTasks}>
                Save Progress
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="All tasks will been cleared" onClick={this.props.clearAll}>
                Clear All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="All done tasks are going to be cleared" onClick={this.props.clearAllDoneTasks}>
                Clear done tasks
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      )
    }
  }
