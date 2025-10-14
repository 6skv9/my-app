import React, {useState} from "react";
import api from "../axiosConfig";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({username:"", password: ""});
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

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input name = "username" placeholder= "Username" onChange={handleChange}/>
                <input name = "password" placeholder= "Password" onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <button onClick={() => navigate("/signup")}>Signup here</button> </p>
        </div>
    )
}

export default Login;