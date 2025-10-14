import React, {useState} from "react";
import api from "../axiosConfig";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [form, setForm] = useState({username:"", password: ""});
    const navigate = useNavigate();

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await api.post("v1/hello", form);
            // localStorage.setItem("token", res.data.token);
            navigate("/home");
        }
        catch (err){
            alert("Failed");
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input name = "username" placeholder= "Username" onChange={handleChange}/>
                <input name = "password" placeholder= "Password" onChange={handleChange}/>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <button onClick={() => navigate("/login")}>Login here</button> </p>
        </div>
    )
}

export default SignUp;