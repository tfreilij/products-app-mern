import React, {useState } from 'react';

import { createUserWithEmailAndPassword, addNewUser } from '../Services/UsersServices'; 
import { Form, Button } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';


const Registration = () => {
    const history = useHistory();
    const [form,setForm] = useState({
      email:'',
      name:'',
      surname:'',
      password:''
    });

    const handleClick = (e) =>{
      
      const name = form.name;
      const surname = form.surname;
      const email = form.email;
      const password = form.password;

      createUserWithEmailAndPassword(email,password)
      .then(data => {
        const userId = data.user.uid;
      
        addNewUser(name,surname,email,userId)
        .then( data => {
               console.log("user added ",data );
               history.push("/")
        })
        .catch( error => {
              console.log("user error", error);
        })
      })
      .catch( err => {
          console.log("there was an error in the user registration", err);
      })



      
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
        <Form.Control onChange={handleChange} type="email" name="email" value={form.email} placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} type="password" name="password" value={form.password} placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="name" value ={form.name} placeholder="Name" />
      </Form.Group>
      <Form.Group controlId="formGroupSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="surname" value={form.surname} placeholder="Surname" />
      </Form.Group>
      <Button onClick={handleClick} variant="primary" type="submit" >
        Accept
      </Button>
      
    </Form>
    ) 

       

}

export default Registration;