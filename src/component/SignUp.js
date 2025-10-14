import React, {useState} from "react";
import api from "../axiosConfig";
import {useNavigate} from "react-router-dom";
import { Form,Button, Container,Segment,Header, Dropdown } from 'semantic-ui-react';

const SignUp = () => {
    const [form, setForm] = useState({name:"",email:"" ,mobile:"",password: "",role:"USER",});
    const navigate = useNavigate();

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await api.post("v1/signup", form);
            // localStorage.setItem("token", res.data.token);
            navigate("/home");
        }
        catch (err){
            alert("Failed");
        }
    };
      const roleOptions =[
      {key:'user',text:'User',value:'USER'},
      {key:'admin', text:'Admin',value:'ADMIN'},
      ];

    return (
        <div>
           <Container textAlign="center">
            <Segment basic>
            < Header as="h2" color="blue" textAlign="center">Sign Up</Header>
            <Form onSubmit={handleSubmit}>
                <Form.Input name ="name" label = "username" 
                placeholder= "Username"
                 onChange={handleChange}
                 />
                 <Form.Input name="email" label="Email"
                 placeholder="Email"
                 onChange={handleChange}
                 />
                 <Form.Input name ="mobile" label="phone"
                 placeholder="phone" 
                 onChange={handleChange}
                 />
                <Form.Input name="password" label = "password"
                 placeholder= "Password"
                  onChange={handleChange}
                  />
                  <Form.Field>
                    <label>Role</label>
                    <Dropdown
                     placeholder="Select Role"
                     fluid
                     selectionoptions={roleOptions}
                     name="role"
                     onChange={handleChange}
                    />
                  </Form.Field>
                <Button color="blue"  fluid type="submit">Register</Button>
            </Form>
            <p>Already have an account? <Button onClick={() => navigate("/login")}>Login here</Button> </p>
            </Segment>
            </Container>
        </div>
    )
}

export default SignUp;