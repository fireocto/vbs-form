import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"

function App() {

  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    childAddress: '',
    childInfo: '',
    childEmergencyContactName: '',
    childEmergencyContactNumber: '',
    childDismissal: '',
    guardianName: '',
    guardianNumber: '',
    guardianEmail: '',
    guardianAddress: '',
    guardianChurch: '',
    guardianGuest: '',
    photoPermission: '',
  })

  const onChangeHandler = (event) =>{
    setFormData(()=>({
      ...formData,
      [event.target.name]: event.target.value 
    }))
  }

  const onSubmitHandler = (event) =>{
    console.log(event)
  }

  return (
    <div className="kidForm">
      <header className="kidForm-header">
        <Container>
          <Card className="mb-10">
            <Card.Img />
            <Card.Body>
              <Card.Title>VBS Signup</Card.Title>
              <Card.Text>This is an example here</Card.Text>
            </Card.Body>
          </Card>
        </Container>

        <Container>  
          <Form onSubmit={onSubmitHandler}>
            {/* CHILD INFORMATION FORM AREA */}
            <Row>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Child's Information</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Child's Name" 
                    name='childName'
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Control 
                    type="text" 
                    placeholder="Child's Age" 
                    name='childAge'
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Control 
                    type="text" 
                    placeholder="Address" 
                    name='childAddress'
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Text className="text">Medical or other information we need to know</Form.Text>
                  <Form.Control 
                    type="textarea" 
                    placeholder="Please include food allergies" 
                    name='childInfo'
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Text className="text">Emergency Contact</Form.Text>
                  <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    name='childEmergencyContactName'
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Control 
                    type="text" 
                    placeholder="Phone Number" 
                    name='childEmergencyContactNumber'
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Text className='text'>Dismissal Information</Form.Text>
                  <Form.Control 
                    type="textarea" 
                    placeholder="Who may pick up your child at the end of each VBS day?"
                    name='childDismissal'
                    onChange={onChangeHandler}
                    required
                    />
                </Form.Group>
              </Col>

            {/* PARENT INFORMATION FORM AREA */}

            <Col md={3}>
                <Form.Group controlId="formEmail">
                <Form.Label>Parent/Guardian Information</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    name='guardianName'
                    onChange={onChangeHandler}
                    required
                  />
                <Form.Control 
                    type="text" 
                    placeholder="Phone Number" 
                    name='guardianNumber'
                    onChange={onChangeHandler}
                    required
                  />
                <Form.Control 
                    type="email" 
                    placeholder="Email Address" 
                    name='guardianEmail'
                    onChange={onChangeHandler}
                    required
                  />
                <Form.Control 
                    type="text" 
                    placeholder="Address, if different from child" 
                    name='guardianAddress'
                    onChange={onChangeHandler}
                    required
                  />
                <Form.Text className="text">Do You Attend Church?</Form.Text>
                <Form.Control 
                    type="text" 
                    placeholder="If so, where?" 
                    name='guardianChurch'
                    onChange={onChangeHandler}
                    required
                  />
                <Form.Text className="text">Are you visiting?</Form.Text>
                <Form.Control 
                    type="text" 
                    placeholder="Who are you a guest of?" 
                    name='guardianGuest'
                    onChange={onChangeHandler}
                    required
                  />
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

export default App;
