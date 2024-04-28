import RegisterForm from "../components/RegisterForm/RegisterForm.jsx";
import LoginForm from "../components/LoginForm/LoginForm.jsx";
import {useState} from "react";

const Authentification = () => {

    return (
        <section>
                <RegisterForm />
                <LoginForm />
        </section>
    )
}

export default Authentification;