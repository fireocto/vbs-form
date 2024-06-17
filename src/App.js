import { useState } from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"

function kidForm() {
  return (
    <div className="kidForm">
      <header className="kidForm-header">
        <Container>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>VBS Signup</Card.Title>
              <Card.Text>This is an example here</Card.Text>
            </Card.Body>
          </Card>
          <Form>
            {/* CHILD INFORMATION FORM AREA */}
            <Row>
              <Col>
              <Form.Group controlId="formEmail">
                <Form.Label>Child's Information</Form.Label>
                <Form.Control type="string" placeholder="Child's Name" />
                <Form.Control type="string" placeholder="Child's Age" />
                </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Control type="string" placeholder="Address" />
                <Form.Text className="text">Medical or other information we need to know</Form.Text>
                <Form.Control type="textarea" placeholder="Please include food allergies" />
                <Form.Text className="text">Emergency Contact</Form.Text>
                <Form.Control type="string" placeholder="Name" />
                <Form.Control type="string" placeholder="Phone Number" />
                <Form.Text className="text">Dismissal Information</Form.Text>
                <Form.Control type="string" placeholder="Who may pick up your child at the end of each VBS day?" />
              </Form.Group>
              </Col>
            </Row>
            {/* PARENT INFORMATION FORM AREA */}
            <Row>
              <Col>
                <Form.Group controlId="formEmail">
                <Form.Label>Parent/Guardian Information</Form.Label>
                <Form.Control type="string" placeholder="Name" />
                <Form.Control type="string" placeholder="Phone Number" />
                <Form.Control type="string" placeholder="Email Address" />
                <Form.Control type="string" placeholder="Address, if different from child" />
                <Form.Text className="text">Do You Attend Church?</Form.Text>
                <Form.Control type="string" placeholder="If so, where?" />
                <Form.Text className="text">Are you visiting?</Form.Text>
                <Form.Control type="textarea" placeholder="Who are you a guest of?"/>
                <Form.Text className="text">May we have permission to photograph your child for promotional purposes?</Form.Text>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary">Yes</button>
                  <button type="button" className="btn btn-secondary">No</button>
                </div>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Container>
      </header>
    </div>
  )
}

export default kidForm;
