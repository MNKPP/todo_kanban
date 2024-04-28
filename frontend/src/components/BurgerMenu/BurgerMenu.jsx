import s from './BurgerMenu.module.scss';
import { useState } from "react";
import { AlignCenter } from "lucide-react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => {
        setIsToggle(!isToggle);
    }

    return (
        <>
            <AlignCenter color="#fff" onClick={handleToggle}/>
            { isToggle &&
                <div className={s['menu-burger-container']}>
                    <ul>
                        <li><Link to="/" onClick={handleToggle}>Home</Link></li>
                        <li><Link to="/register" onClick={handleToggle}>Register</Link></li>
                        <li><Link to="/login" onClick={handleToggle}>Login</Link></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default BurgerMenu;