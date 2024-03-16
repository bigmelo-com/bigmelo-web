import { selectLogged, selectToken } from "../../redux/tokenSlice";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import LogInForms from "../LogInForm/LogInForm";
import NavBar from "./NavBar";
import Modal from "../Modals/Modal";
import Logo from "./Logo";
import axios from "axios";

export default function NavbarController({
  backButton = false,
  hasNavigation,
  showModal
}) {
  const navBarWithLogoScrolledStyle =
    "responsive:fixed responsive:flex-row responsive:bg-primary responsive:justify-between ";
  const navBarWithLogoStyle =
    "responsive:absolute responsive:left-auto items-center ";
  const NavBarStyle = "responsive:flex responsive:text-white responsive:divide-x responsive:divide-button";
  const NavBarScrolledStyle = "responsive:flex responsive:items-center responsive:text-white responsive:divide-x responsive:divide-button";
  const mobileNavBarStyle = "fixed bg-primary z-[60] h-full w-full left-0 text-white top-[66px] transition-transform duration-300 ease-in-out";
  const mobileNavBarStyleClose = " translate-y-full";
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isActivated, setIsActivated] = useState(true);
  const [isBurguerMenuOpen, setIsBurguerMenuOpen] = useState(false);
  const isLogged = useSelector(selectLogged);
  const token = useSelector(selectToken);

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

  const toggleBurgerMenu = () => {
      screen.width < 750
        ? setIsBurguerMenuOpen(!isBurguerMenuOpen)
        : setIsBurguerMenuOpen(false);
  };

  const setLoginFormState = (loginFormState) => {
    setIsLoginFormOpen(loginFormState);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100 && screen.width > 750) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  window.addEventListener("resize", () => {
    screen.width < 750 ? setIsMobileView(true) : setIsMobileView(false);
  });

  useEffect(() => {
    screen.width < 750 && setIsMobileView(true);
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
    <LogInForms toggleLoginForm={setLoginFormState}/>
    )}
    {isLogged && !isActivated && showModal && (
    <Modal bg_color="bg-error">
        Aún no activas tu cuenta, activa tu cuenta para disfrutar de Bigmelo.{" "}
        <u>Activa tu cuenta aquí</u>
    </Modal>
    )}
    <motion.div
    className={
        "flex flex-col w-full z-[60] h-fit fixed left-0 " +
        (isScrolled ? navBarWithLogoScrolledStyle : navBarWithLogoStyle)
    }
    key={isScrolled}
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{
        duration: 1
    }}
    >
    <div
        className={
        (isScrolled ? "pl-11 responsive:w-fit " : " justify-center ") +
        "relative bg-primary w-full flex"
        }
    >
        <Logo style="h-fit w-fit justify-center bg-primary py-5" />
        <button
        className="absolute w-[30px] top-4 right-5 responsive:hidden"
        onClick={toggleBurgerMenu}
        >
        <img
            src={
            "/public/" +
            (isBurguerMenuOpen ? "close_button.svg" : "burguer_icon.svg")
            }
            alt="burguer-icon"
            className={
            "w-full transition-all duration-200 " +
            (isBurguerMenuOpen ? "rotate-180" : "")
            }
        />
        </button>
    </div>

    {!isMobileView && (
        <NavBar
        backButton={backButton}
        hasNavigation={hasNavigation}
        isLogged={isLogged}
        openLogInForm={setLoginFormState}
        style={isScrolled ? NavBarScrolledStyle : NavBarStyle}
        isActivated={isActivated}
        />
    )}
    </motion.div>
    {isMobileView && (
    <NavBar
        backButton={backButton}
        hasNavigation={hasNavigation}
        toggleBurgerMenu={toggleBurgerMenu}
        openLogInForm={setLoginFormState}
        isLogged={isLogged}
        style={mobileNavBarStyle + (isBurguerMenuOpen ? '':mobileNavBarStyleClose)}
        isActivated={isActivated}
    />
    )}
    </>
  );
}
