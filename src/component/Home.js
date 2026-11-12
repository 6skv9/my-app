import React, {useState} from "react";
import api from "../axiosConfig";
import {useNavigate} from "react-router-dom";
import { Container,Segment,Header, Button} from "semantic-ui-react";
const Home = () => {
    const navigate = useNavigate();

    const logout = () => {
        // localStorage.remove("token");
        navigate("/login");
    }


    return (
        <div>
        <Container textAlign="center" style={{ marginTop: '5em', }}>
      <Segment padded="very" raised>
        <Header as="h1" color="blue">
          Welcome to Home Page
         </Header>
            <Button color="red" onClick={logout}>Logout</Button>
            </Segment>
            </Container>
        </div>
    );
};

export default Home;