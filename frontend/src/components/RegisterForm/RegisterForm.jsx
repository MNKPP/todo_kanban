import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { registerPostRequest } from "../../../services/auth.service.js";
import registerSchema from "../../../validators/register.schema.js";
import { yupResolver } from "@hookform/resolvers/yup";

const  RegisterForm = ({ onToggle }) => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema)});
    const navigate = useNavigate();

    const onSubmit = (data) => {
        registerPostRequest(data)
            .then(response => {
                if (response && response.status === 400) {
                    setError("email", { message: "Email already exists" });
                    return;
                }
                navigate("/login");
            })
            .catch(error => {
                throw new Error(error.message);
            })
    };

    return (
        <>
            <h2>S'enregister sur Todo/kanban</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-label">
                    <label htmlFor="input-username">Username :</label>
                    <input type="text" id="input-username" {...register("username")}/>
                    <p>{errors.username?.message}</p>
                </div>

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

                <div className="input-label">
                    <label htmlFor="input-confirm">Confirm Password :</label>
                    <input type="password" id="input-confirm" {...register("confirm")}/>
                    <p>{errors.confirm?.message}</p>
                </div>

                <input type="submit" value="S'enregistrer" />
                <button type="button" onClick={onToggle}>Se connecter</button>
            </form>
        </>
    )
}

export default RegisterForm;