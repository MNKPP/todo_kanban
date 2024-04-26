import { useForm } from "react-hook-form";
import { loginPostRequest } from "../../../services/auth.service.js";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/member/member-slice.js";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        loginPostRequest(data)
            .then(response => {
                dispatch(addToken(response.data.token));
                navigate("/dashboard");
            })
            .catch(error => {
                throw new Error(error.message);
            })
    };

    return (
        <>
            <h2>Se connecter</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-label">
                    <label htmlFor="input-email">Email :</label>
                    <input type="email" id="input-email" {...register("email")}/>
                </div>

                <div className="input-label">
                    <label htmlFor="input-password">Password :</label>
                    <input type="password" id="input-password" {...register("password")}/>
                </div>

                <input type="submit" value="Se connecter"/>
            </form>
        </>
    )
}

export default LoginForm;