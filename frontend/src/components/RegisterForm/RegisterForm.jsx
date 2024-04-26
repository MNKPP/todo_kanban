import { useForm } from "react-hook-form";

const RegisterForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

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
            </form>
        </>
    )
}

export default RegisterForm;