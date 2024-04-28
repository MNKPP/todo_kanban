import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { registerPostRequest } from "../../../services/auth.service.js";
import registerSchema from "../../../validators/register.schema.js";
import { yupResolver } from "@hookform/resolvers/yup";
import {isMemberRegister} from "../../store/member/member-slice.js";

const  RegisterForm = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema)});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        registerPostRequest(data)
            .then(response => {
                if (response && response.status === 400) {
                    setError("email", { message: "Email already exists" });
                    return;
                }
                dispatch(isMemberRegister());
                navigate("/login");
            })
            .catch(error => {
                throw new Error(error.message);
            })
    };

    return (
        <>
            <h2 className="text-center pt-4">Register on ...</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-label">
                    <label htmlFor="input-username">Username :</label>
                    <input type="text" id="input-username" {...register("username")}/>
                    <p className="validator-error">{errors.username?.message}</p>
                </div>

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

                <div className="input-label">
                    <label htmlFor="input-confirm">Confirm Password :</label>
                    <input type="password" id="input-confirm" {...register("confirm")}/>
                    <p className="validator-error">{errors.confirm?.message}</p>
                </div>

                <input type="submit" value="S'enregistrer" />
                <Link to="/login">Se connecter →</Link>
            </form>
        </>
    )
}

export default RegisterForm;