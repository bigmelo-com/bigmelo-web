import { changeToken } from "../../redux/tokenSlice";
import { useDispatch } from "react-redux";
import NavLink from "./NavLink";

export default function NavBar({backButton, hasNavigation, toggleBurgerMenu=()=>{}, openLogInForm, isLogged, isActivated, style}) {
    const linkStyle = "w-full justify-center py-3 hover:bg-primary-hover responsive:px-5 responsive:py-0 responsive:w-fit"; 
    const dispatch = useDispatch(); 

    const logout = async () => {
        dispatch(changeToken({ access_token: "", logged: false }));
        toggleBurgerMenu();
    };

    const onClickLogIn = () => {
        openLogInForm(true);
        toggleBurgerMenu();
    };

    const closeBurgerMenu = () => {
        toggleBurgerMenu();
    };

    return (
        <>
            <nav className={style}>
                {backButton && (
                    <NavLink to='/' image='/public/back_button.svg' linkStyle={linkStyle} onClick={closeBurgerMenu}>
                        Regresar
                    </NavLink>
                )}
                {hasNavigation && (
                    <>
                    <NavLink linkStyle={linkStyle} to="/#home" image='/public/home.svg' onClick={closeBurgerMenu}>
                        Inicio
                    </NavLink>
                    <NavLink linkStyle={linkStyle} to="/#slider" image='/public/how_to.svg' onClick={closeBurgerMenu}>
                        ¿Como usar Bigmelo?
                    </NavLink>
                    </>
                )}
                {isLogged ? (
                    <>
                    {(isActivated && hasNavigation) && (
                        <>
                        <NavLink to='/profile' image='/public/chat.svg' linkStyle={linkStyle} onClick={closeBurgerMenu}>
                            Mis Mensajes
                        </NavLink>  
                        <NavLink to='/support' image='/public/support.svg' linkStyle={linkStyle} onClick={closeBurgerMenu}>
                            Contactanos
                        </NavLink>  
                        </>
                    )}
                    <NavLink image='/public/login.svg' linkStyle={linkStyle} onClick={logout}>
                        Salir
                    </NavLink>    
                    </>
                ):(
                    <>
                    <NavLink to='/#register' image='/public/register.svg' linkStyle={linkStyle} onClick={closeBurgerMenu}>
                        Registrate
                    </NavLink>   
                    <NavLink image='/public/login.svg' linkStyle={linkStyle} onClick={onClickLogIn}>
                        Ingresar
                    </NavLink>  
                    </>
                )}
            </nav>
        </>
    )
}
