import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from './Header'
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/signup"} element={<SignUp/>}></Route>
                <Route path={"/login"} element={<Login/>}></Route>
                <Route path={"/home"} element={<Home/>}></Route>
                <Route path={"/"} element={<Navigate to={"/signup"}/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
