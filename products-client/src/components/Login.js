import React, {useState } from 'react';

import { Form, Button } from 'react-bootstrap';
import { signInWithEmailAndPassword } from '../Services/UsersServices';
import { useHistory } from "react-router-dom";


function Login() {

    const [form,setForm] = useState({
      email:'',
      password:''
    });

    const history = useHistory();
    
    const handleClick = (e) =>{
      
      const validLogin = signInWithEmailAndPassword(form.email,form.password);

      if ( validLogin ) { history.push("/")}
      e.preventDefault();


    }
    const handleChange = (e) => {
      const target = e.target;
      setForm({
        ...form,
        [target.name]:target.value
      })
    }

   
    return(
      <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={handleClick} variant="primary" type="submit">
       Accept
      </Button>
      
    </Form>
    ) 

       

}

export default Login;