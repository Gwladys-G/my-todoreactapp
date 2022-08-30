import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';


  export default class Settings extends Component {

    handleSelect = (eventKey) => alert(`${eventKey}`)

    render (){
      return (
        <div>
          <Nav variant="pills" activeKey="1" onSelect={this.handleSelect}>
            <Nav.Item>
              <Nav.Link eventKey="Progress Saved !" >
                <button onClick={this.props.saveTasks}>Save Progress</button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="All history has been cleared" title="Item">
                <button onClick={this.props.clearAll}>Clear All</button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="All done tasks have been cleared" title="Item">
                <button onClick={this.props.clearAllDoneTasks}>Clear done tasks</button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      )
    }
  }
