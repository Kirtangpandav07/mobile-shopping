import axios from 'axios';
import React from 'react'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
  const[loginemail,setloginemail]=useState([])
  const[loginPassword,setloginPassword]=useState([])

  const Hadlersubmit =async(e)=>{
    
   try{
    const res =await axios.post('http://localhost:3000/login',{
      useremail:loginemail,
      userpassword:loginPassword,
    })
 
    console.log("data>>>",res.data);
   }
   catch(err){
    console.log(err);
   }

   
 }

  return (
   <>

   <div className='container'>
   
    <Form>
      <Form.Group className="mb-3 my-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={loginemail} onChange={(e)=>setloginemail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={loginPassword} onChange={(e)=>setloginPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className='mb-5' onClick={Hadlersubmit} >
        Submit
      </Button>
    </Form>
    </div>
   
   </>
  )
}

export default Login