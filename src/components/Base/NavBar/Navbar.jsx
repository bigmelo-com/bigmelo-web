import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { useDispatch, useSelector } from "react-redux";
import { changeToken, selectLogged, selectToken } from "../../../redux/tokenSlice";
import Logo from "./Logo";
import { useState } from "react";
import LogInForms from "../LogInForm";
import Modal from "../Modal";
import { useEffect } from "react";
import axios from "axios";

export default function Navbar({backButton=false, hasNavigation, showModal}) {
    const navBarResponsive = "responsive:flex responsive:flex-row responsive:h-fit responsive:translate-y-0 responsive:divide-x ";
    const navBarWithLogo = "responsive:left-auto responsive:absolute items-center ";
    const navBarWithLogoScrolled = "responsive:items-center responsive:h-fit responsive:flex-row responsive:bg-primary responsive:grow";
    const linkStyle = "w-full justify-center py-3 hover:bg-primary-hover responsive:px-5 responsive:py-0 responsive:w-fit";
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isActivated, setIsActivated] = useState(true);
    const [isBurguerMenuOpen, setIsBurguerMenuOpen] = useState(false);
    const isLogged = useSelector(selectLogged);
    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    const variants = {
        hidden: {
        opacity: 0,
        y: -100
        },
        visible: {
        opacity: 1,
        y: 0
        }
    };

    const logout = () => {
        dispatch(changeToken({ access_token: "", logged: false }));
    };

    const toggleBurgerMenu =  () => {
        setIsBurguerMenuOpen(!isBurguerMenuOpen);
    };
    
    window.addEventListener('scroll', () => {
        if(window.scrollY > 100 && screen.width > 750){
            setIsScrolled(true);
        }else{
            setIsScrolled(false);
        }
    });

    useEffect(() => {
        axios
        .get(import.meta.env.VITE_LOCAL_API_URL + "/v1/profile", {
        headers: {
        Authorization: `Bearer ${token}`
        }
        })
        .then((res) => {
            setIsActivated(true);
        })
        .catch((err) => {
            setIsActivated(false);
        });
    });

  return (
    <>
    {isLoginFormOpen && (
        <>
        <button onClick={() => setIsLoginFormOpen(false)}>
            <img
            className="fixed w-6 top-10 right-10 z-[71]"
            src="/public/close_button.svg"
            alt="close-button"
            />
        </button>
        <LogInForms />
        </>
    )}
    {(isLogged && !isActivated && showModal) && (
        <Modal bg_color="bg-error">
            Aún no activas tu cuenta, activa tu cuenta para disfrutar de Bigmelo. <u>Activa tu cuenta aquí</u>
        </Modal>
    )}
    <motion.div 
    className={"fixed flex flex-col w-full z-[60] top-0 left-0 h-full " + (isScrolled ? navBarWithLogoScrolled: navBarWithLogo)}
    key={isScrolled}
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{
        duration:1
    }}
    >
        <div className={(isScrolled ? "pl-11 responsive:w-fit " : " justify-center ") + "relative bg-primary w-full flex"}>    
            <Logo style="h-fit w-fit justify-center bg-primary py-5"/>
            <button className="absolute w-[30px] top-4 right-5 responsive:hidden" onClick={toggleBurgerMenu}>
                <img src={"/public/public/" + (isBurguerMenuOpen ? "close_button.svg" : "burguer_icon.svg")} alt="burguer-icon" className={"w-full transition-all duration-200 " + (isBurguerMenuOpen ? 'rotate-180':'')}/>
            </button>
        </div>


        <nav className={navBarResponsive + (isScrolled ? " responsive:justify-end " : " responsive:justify-center pb-5 ") + "flex flex-col text-button w-full h-full bg-primary z-[60] transition-all duration-300 ease-in-out" + (!isBurguerMenuOpen ? ' translate-y-full' : ' ')}>
            {backButton && (
                <NavLink to='/' image='/public/back_button.svg' linkStyle={linkStyle}>
                    Regresar
                </NavLink>
            )}
            {hasNavigation && (
                <>
                <NavLink linkStyle={linkStyle} to="/#home" image='/public/public/home.svg'>
                    Home
                </NavLink>
                <NavLink linkStyle={linkStyle} to="/#slider" image='/public/public/how_to.svg'>
                    ¿Como usar Bigmelo?
                </NavLink>
                </>
            )}
            {isLogged ? (
                <>
                {(isActivated && hasNavigation) && (
                    <NavLink to='/profile' image='/public/chat.svg' linkStyle={linkStyle}>
                        Mis Mensajes
                    </NavLink>  
                )}
                <NavLink to='/' image='/public/login.svg' linkStyle={linkStyle} action={logout}>
                    Salir
                </NavLink>    
                </>
            ):(
                <>
                <NavLink image='/public/login.svg' linkStyle={linkStyle} action={() => setIsLoginFormOpen(true)}>
                    Ingresar
                </NavLink>  
                <NavLink to='/#register' image='/public/register.svg' linkStyle={linkStyle} >
                    Registrate
                </NavLink>   
                </>
            )}
        </nav>
    </motion.div>
    </>
  )
}
