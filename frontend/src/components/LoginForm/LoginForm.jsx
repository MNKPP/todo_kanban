import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { loginPostRequest } from "../../../services/auth.service.js";
import loginSchema from "../../../validators/login.schema.js";
import { addToken } from "../../store/member/member-slice.js";
import LoginError from "./LoginError.jsx";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginForm = ({ onToggle }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginSchema)});
    const [isLoginError, setIsLoginError] = useState(false);

    const onSubmit = (data) => {
        loginPostRequest(data)
            .then(response => {
                dispatch(addToken(response.data.token));
                navigate("/dashboard");
            })
            .catch(error => {
                setIsLoginError(true);
                throw new Error(error.message);
            })
    };

    return (
        <>
            { isLoginError && <LoginError />}

            <h2>Se connecter</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-label">
                    <label htmlFor="input-email">Email :</label>
                    <input type="email" id="input-email" {...register("email")}/>
                    <p>{errors.email?.message}</p>
                </div>

                <div className="input-label">
                    <label htmlFor="input-password">Password :</label>
                    <input type="password" id="input-password" {...register("password")}/>
                    <p>{errors.password?.message}</p>
                </div>

                <input type="submit" value="Se connecter"/>
                <button type="button" onClick={onToggle}>S'inscrire</button>
            </form>
        </>
    )
}

export default LoginForm;