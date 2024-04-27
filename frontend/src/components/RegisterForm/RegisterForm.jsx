import { useForm } from "react-hook-form";
import { registerPostRequest } from "../../../services/auth.service.js";

const  RegisterForm = ({ onToggle }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        registerPostRequest(data)
            .then(response => {})
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
                    <input type="text" id="input-username" { ...register("username") }/>
                </div>

                <div className="input-label">
                    <label htmlFor="input-email">Email :</label>
                    <input type="email" id="input-email" { ...register("email") }/>
                </div>

                <div className="input-label">
                    <label htmlFor="input-password">Password :</label>
                    <input type="password" id="input-password" { ...register("password") }/>
                </div>

                <div className="input-label">
                    <label htmlFor="input-confirm">Confirm Password :</label>
                    <input type="password" id="input-confirm" { ...register("confirm") }/>
                </div>

                <input type="submit" value="S'enregistrer" />
                <button type="button" onClick={onToggle}>Se connecter</button>
            </form>
        </>
    )
}

export default RegisterForm;