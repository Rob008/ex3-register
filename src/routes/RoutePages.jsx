import { LoginForm } from "../pages/LoginForm";
import { RegistrationForm } from "../pages/RegistrationForm";
import { Main } from "../pages/Main";
import {
  Routes,
  Route
} from "react-router-dom";

export const RoutePages = ()=>{
    return(
        <Routes>
        <Route exact path="" element={<LoginForm />} />
        <Route  path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/main" element={<Main />} />
        </Routes>
    )
}