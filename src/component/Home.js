import React, {useState} from "react";
import api from "../axiosConfig";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const logout = () => {
        // localStorage.remove("token");
        navigate("/login");
    }


    return (
        <div>
            <h1>Welcome to Home Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;