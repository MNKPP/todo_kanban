import RegisterForm from "../components/RegisterForm/RegisterForm.jsx";
import LoginForm from "../components/LoginForm/LoginForm.jsx";
import {useState} from "react";

const Authentification = () => {
    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => {
        setIsToggle(!isToggle);
    };

    return (
        <section>
            { isToggle
                ? <RegisterForm onToggle={handleToggle}/>
                : <LoginForm onToggle={handleToggle}/>
            }
        </section>
    )
}

export default Authentification;