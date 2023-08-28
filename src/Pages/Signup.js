import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import axios from 'axios';

const Signup = () => {

const[email,setEmail]=useState([])
const[password,setPassword]=useState([])

const submitHadler=(e)=>{
   axios.post('http://localhost:3000/signup',{
    useremail:email,
    userpassword:password
  })
  .then((res)=>{
    console.log(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
}


  
  
  
  return (
    <div>
        <div className='container my-5'>
        <Formik>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
      </Row>

      {/* <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

     

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row> */}

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button variant="primary" type="submit" onClick={submitHadler}>
        Submit
      </Button>
    </Form>
    </Formik>
    </div>
    </div>
  )
}

export default Signup