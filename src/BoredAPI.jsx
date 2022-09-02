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
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Button
      variant="dark" size="m"
      type="button"
      id="accordion"
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

export default class BoredAPI extends Component {

  render(){
    return (
      <Accordion defaultActiveKey="1"  className="mt-3" >
        <Card>
          <Card.Header className="d-grid gap-2">
            <CustomToggle eventKey="0">I'm Bored!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            {!this.props.activity? null : (
                <InputGroup className="mb-3">
                  <Form.Control
                    className="hide" id="APIform"
                    as="textarea"
                    value={this.props.activity}
                    title={this.props.activity}
                    readOnly={true}
                  />
                  <Button variant="outline-secondary" id="button-addon2" onClick={this.props.AddActivity} eventKey="1"> Let's add this</Button>
                </InputGroup>
                )}
                <FontAwesomeIcon icon={faRotate} onClick={this.props.GetActivity}></FontAwesomeIcon>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  }
}
