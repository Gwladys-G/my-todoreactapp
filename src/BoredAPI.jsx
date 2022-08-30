import React, { Component }  from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRotate} from '@fortawesome/free-solid-svg-icons'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default class BoredAPI extends Component {
  render(){
    return (
      // <div>
      //   <button onClick={this.props.GetActivity}>I'm Bored!</button>
      //   <form>
      //     <input className="hide" id="APIform"
      //     value={this.props.activity}
      //     title={this.props.activity}
      //     readOnly={true}
      //     />
      //     {!this.props.activity? null : (<button onClick={this.props.AddActivity}>Let's add this</button>)}
      //   </form>
      // </div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">I'm Bored!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {/* <input className="hide" id="APIform"
                value={this.props.activity}
                title={this.props.activity}
                readOnly={true}
              />
              {!this.props.activity? null : (<button onClick={this.props.AddActivity}>Let's add this</button>)} */}
              <InputGroup className="mb-3">
                <Form.Control
                  className="hide" id="APIform"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={this.props.activity}
                  title={this.props.activity}
                  readOnly={true}
                />
                {!this.props.activity? null : (<Button variant="outline-secondary" id="button-addon2" onClick={this.props.AddActivity}>Let's add this</Button>)}
              </InputGroup>
                <FontAwesomeIcon icon={faRotate} onClick={this.props.GetActivity}></FontAwesomeIcon>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  }
}
