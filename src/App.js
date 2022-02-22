import React,{useState} from "react";
import { LoginForm } from "./components/LoginForm";
import { RegistrationForm } from "./components/RegistrationForm";
import {
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  

        
return(
    <div className="App">
      <Routes>
      <Route exact path="/" element={<LoginForm />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}
