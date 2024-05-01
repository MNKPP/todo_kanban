import s from './LoginForm.module.scss';
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";

import { loginPostRequest } from "../../services/auth.service.js";
import loginSchema from "../../../validators/login.schema.js";
import { addToken } from "../../store/member/member-slice.js";
import LoginError from "./LoginError.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterSuccess from "../RegisterForm/RegisterSuccess.jsx";
import { isMemberRegister } from "../../store/member/member-slice.js";


const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isRegister = useSelector(state => state.MEMBER.isRegister);
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginSchema)});
    const [isLoginError, setIsLoginError] = useState(false);

    const onSubmit = (data) => {
        loginPostRequest(data)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                dispatch(addToken(response.data.token));
                navigate("/dashboard");
            })
            .catch(error => {
                dispatch(isMemberRegister())
                setIsLoginError(true);
                throw new Error(error.message);
            })
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-label">
                    <label htmlFor="input-email">Email :</label>
                    <input type="email" id="input-email" {...register("email")}/>
                    <p className="validator-error">{errors.email?.message}</p>
                </div>

                <div className="input-label">
                    <label htmlFor="input-password">Password :</label>
                    <input type="password" id="input-password" {...register("password")}/>
                    <p className="validator-error">{errors.password?.message}</p>
                </div>

                <input type="submit" value="Se connecter"/>
                <Link to="/register">S'enregistrer →</Link>
            </form>

            {isLoginError &&
                <div className={s['login-error']}>
                    <LoginError/>
                </div>
            }

            {isRegister &&
                <div className={s['register-success']}>
                    <RegisterSuccess/>
                </div>
            }
        </>
    )
}

export default LoginForm;