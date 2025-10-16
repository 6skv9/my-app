import React, {useState} from "react";
import api from "../axiosConfig";
import {useNavigate} from "react-router-dom";
import { Form,Button, Container,Segment,Header, Dropdown ,Icon} from 'semantic-ui-react';
//import{icon} from 'semantic-ui-react';
import bgImage from'../resources/r.jpg';
//import { Cinzel } from "next/font/google";
//const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"] });

const SignUp = () => {
    const [form, setForm] = useState({name:"",email:"" ,mobile:"",password: "",role:"",});
    const navigate = useNavigate();

    const handleChange = (e, data) => {
          const name = data?.name || e.target.name;
          const value = data?.value || e.target.value;
          setForm(prev => ({ ...prev, [name]: value }));
          
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await api.post("v1/Signup", form);
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
      {key:'manager', text:'Manager',value:'MANAGER'},
      ];
         const [showPassword, setShowPassword] = useState(false); 
    return (
        <div  
         style={{backgroundImage: `url(${bgImage})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                minHeight:'100vh',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                padding:'2em',
                paddingLeft: '120vw',
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
           <Container textAlign="center" style={{
               marginTop: "2em", }}
            >
            <Segment  raised
            padded="very"
            style={{
            width: '400px',
            maxWidth:'90vw',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderLeft: '8px solid #2185d0', 
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
            textAlign: 'left', 
          }}
          >
            
          < Header as="h2" color="black" textAlign="center"style={{fontFamily: "'Cinzel', serif",
             fontSize: '2em', marginBottom: '1em' }} 
             > Sign Up </Header>

            <Form onSubmit={handleSubmit}  style={{ fontSize: '1.1em',fontFamily: "'Cinzel', serif",}}> 
                <Form.Input name ="name" label = "Username" 
                placeholder= "Username"
                 onChange={handleChange}
                   style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                     padding: '10px',
                     fontFamily: "'Cinzel', serif",
                     color:"#333",
                  }}
                 />
                 <Form.Input name="email" label="Email" 
                 placeholder="Email"
                 onChange={handleChange}
                   style={{
                    border: '1px solid #ccc',
                     borderRadius: '5px',
                      padding: '10px',
                      fontSize: '1.1em',
                        fontFamily: "'Cinzel', serif",  
                         color:"#333",
                     }}
                 />
                 <Form.Input name ="mobile" label="Phone"
                 placeholder="phone" 
                 onChange={handleChange}
                   style={{
                  border: '1px solid #ccc', 
                  borderRadius: '5px',
                   padding: '10px',
                   fontSize: '1.1em',
                   fontFamily: "'Cinzel', serif",  
                     color:"#333",
                   
                  }}

                 />
                <Form.Input name="password" label = "Password"      
                  placeholder= " Enter password"
                  type={showPassword ? "text" : "password"} 
                  onChange={handleChange}
                    style={{
                    border: '1px solid #ccc',
                   borderRadius: '5px',
                   padding: '10px',
                   fontFamily: "'Cinzel', serif", 
                    fontSize: '1.1em',
                    color:'#333'
                   }}
                  icon={
                 <Icon
                  name={showPassword ? "eye slash" : "eye"} 
                   link
                 onClick={() => setShowPassword(!showPassword)} 
                   />
                 }
                  />
                 <Form.Field name="role">
                 <label  style={{   fontFamily: "'Cinzel', serif",
                   fontSize: '1em',}}>Role</label>
                 <Dropdown
                  placeholder="Select role" 
                  style={{border: '1px solid #ccc',
                   borderRadius: '5px',
                   padding: '10px',
                   fontFamily: "'Cinzel', serif", 
                  fontSize: '1.1em',}}
                  fluid
                  selection
                  options={roleOptions}
                  name="role"
                  onChange={handleChange}
                  
                />  
                </Form.Field>
                <Button color="blue"  fluid type="submit">Register</Button>
            </Form>
            <br/>
            <p>Already have an account? <Button color="green" onClick={() => 
              navigate("/login")}>Login here</Button> </p>
            </Segment>
            </Container>
        </div>
        </div>
    )
}

export default SignUp;