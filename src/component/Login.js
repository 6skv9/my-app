import React, {useState} from "react";
import api from "../axiosConfig";
import {useNavigate} from "react-router-dom";
import {Form, Container, Segment,Button,Header,Icon } from "semantic-ui-react";
import bgImage from'../resources/g.jpg';
const Login = () => {
    const [form, setForm] = useState({name:"", password: ""});
    const navigate = useNavigate();

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await api.post("v1/login", form);
            // localStorage.setItem("token", res.data.token);
            navigate("/home");
        }
        catch (err){
            alert("Failed");
        }
    };
      const [showPassword, setShowPassword] = useState(false); 
    return (
        <div
        style={{backgroundImage: `url(${bgImage})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                minHeight:'90vh',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                padding:'2em',
                paddingLeft: '85vw',
                paddingBottom :'50vw',
               }}
        >
        <div
        
        style={{
                 backgroundColor:'rgba("255,255,255,0.5")',
                 borderRadius:'15px',
                 padding:'2em',
                 boxShadow:'0 4px 10px rgba(0,0,0,0.2)'


             }}     
        
            >
            <Container text>
                <Segment padded="very" raised style={{marginTop:"6em",
                 width: '400px',
                 maxWidth:'90vw',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderLeft: '8px solid #2185d0', 
                borderRadius: '10px',
               boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                textAlign: 'left', 
                }}>
          < Header as="h2" color="black" textAlign="center"style={{fontFamily: "'Cinzel', serif",
             fontSize: '2em', marginBottom: '1em' }} 
             > Login</Header>
              
            <Form onSubmit={handleSubmit} style={{ fontSize: '1.1em',fontFamily: "'Cinzel', serif",}}> 
          <Form.Input
            fluid
            label="Username"
            name="name"
            placeholder="Enter your username"
            value={form.username}
            onChange={handleChange}
            required
            style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                     padding: '10px',
                     fontFamily: "'Cinzel', serif",
                     color:"#333",
                  }}
          />
          <Form.Input
            fluid
            label="Password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
            style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                     padding: '10px',
                     fontFamily: "'Cinzel', serif",
                     color:"#333",
                  }}
                  icon={
                 <Icon
                  name={ showPassword ? "eye slash":" "}
                   link
                 onClick={() => setShowPassword(!showPassword)} 
                   />
                 }
               />
             <Button  fluid color="blue" size="large"type="submit">Login</Button>
            </Form>
            <br/>
            <p>Don't have an account? <Button color="green" onClick={() => navigate("/signup")}>Signup here</Button>
             </p>
             </Segment>
             </Container>
        </div>
        </div>
    )
}


export default Login;