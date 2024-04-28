import s from './Layout.module.scss';
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

const Header = () => {

    return (
        <header className={s['header']}>
            <h1>MyL</h1>
            <BurgerMenu />
        </header>
    )
}

export default Header;