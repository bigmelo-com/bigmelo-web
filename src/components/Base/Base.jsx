import { changeToken, selectLogged, selectToken } from "../../redux/tokenSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Logo from "./Logo";
import axios from "axios";

export default function Base({ children, bgColor = "bg-secondary", backButton=false, checkRole=true }) {
  // Styles
  const inputClass =
    "responsive:w-[504px] w-[250px] mt-8 p-3 border border-border text-white bg-primary rounded-lg placeholder-white";
  const style =
    bgColor +
    " min-h-fit w-full rounded-xl overflow-hidden max-w-7xl pt-0 mt-0 flex flex-col ";
  const loginButton =
    "absolute responsive:right-1 right-6 font-medium text-button flex";
  const navButton = "absolute responsive:left-1 right-[100px] font-medium text-button flex w-fit"

  // States
  const [isOpen, setOpen] = useState(false);
  const [showActivationMessage, setShowActivationMessage] = useState(false);
  const [post, setPost] = useState({});
  const [message, setMessage] = useState(["", ""]);

  // Functions
  const dispatch = useDispatch();
  const logged = useSelector(selectLogged);
  const token = useSelector(selectToken);
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const logout = () => {
    dispatch(changeToken({ access_token: "", logged: false }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(import.meta.env.VITE_LOCAL_API_URL + "/v1/auth/get-token", post)
      .then((res) => {
        dispatch(
          changeToken({ access_token: res.data.access_token, logged: true })
        );
        setOpen(false);
        setMessage(["", ""]);
      })
      .catch((err) => {
        setMessage([err.response.data.message, "bg-error"]);
      });
  };

  useEffect(() => {
    (logged && checkRole) && (
      axios
        .get(import.meta.env.VITE_LOCAL_API_URL + "/v1/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .catch((err) => {
          if (err.response.status === 401 || err.response.status === 403) setShowActivationMessage(true); 
        })
    );
  },[isOpen]);

  return (
    <>
      <div className="bg-primary min-h-screen responsive:px-11 pt-4 responsive:pb-11 flex flex-col place-items-center  space-y-4 relative">
        {showActivationMessage && (
          <Link
          className="fixed z-50 bg-error p-4 rounded-md responsive:max-w-lg max-w-xs text-center"
          to={`/validate`}
          onClick={() => {
            navigate(`/validate`, { replace: true });
            window.scrollTo({
              top: 0
            });
          }}
          >
            Aún no activas tu cuenta, activa tu cuenta haciendo click <u>aquí</u> para disfrutar de Bigmelo
          </Link>
        )}
        <div className="flex relative w-full max-w-7xl responsive:p-0 px-6 responsive:justify-center">
          <Logo />
          {logged ? (
            <>
            {backButton ? (
              <Link
              className={navButton}
              to={`/`}
              onClick={() => {
                navigate(`/`, { replace: true });
                window.scrollTo({
                  top: 0
                });
              }}
              >
                <img className="mr-2" src="/public/back_button.svg" alt="login" />
                Regresar
              </Link>
            ):(

              <Link
              className={navButton}
              to={`/profile`}
              onClick={() => {
                navigate(`/profile`, { replace: true });
                window.scrollTo({
                  top: 0
                });
              }}
              >
                <img className="mr-2" src="/public/chat.svg" alt="login" />
                Mis Mensajes
              </Link>
            )}
            <Link
            className={loginButton}
            onClick={() => {
              logout();
            }}
            to={`/`}
          >
            <img className="mr-2" src="/public/login.svg" alt="login" />
            Salir
          </Link>
            </>
          ) : (
            <Link
              className={loginButton}
              onClick={() => {
                setOpen(true);
              }}
            >
              <img className="mr-2" src="/public/login.svg" alt="login" />
              Ingresar
            </Link>
          )}
        </div>

        <div className={style}>
            {children}
          <Footer />
        </div>
      </div>

      {isOpen && (
        <div className="flex justify-center fixed inset-0 bg-black z-50 backdrop-blur-sm bg-opacity-30">
          <Link
            onClick={() => {
              setOpen(false);
            }}
          >
            <img
              className="absolute w-6 top-10 right-10"
              src="/public/close_button.svg"
              alt="close-button"
            />
          </Link>
          <form
            className="flex flex-col items-center mt-20"
            action="POST"
            onSubmit={handleSubmit}
          >
            <h2 className="text-title text-xl mb-7">Ingresa a bigmelo</h2>
            <p className="text-paragraph">
              Ingresa los datos que registraste en bigmelo
            </p>
            <input
              name="email"
              type="text"
              className={inputClass}
              placeholder="Correo electrónico"
              onChange={handleInput}
              required
            />
            <input
              name="password"
              type="password"
              className={inputClass}
              placeholder="Contraseña"
              onChange={handleInput}
              required
            />
            <button className="responsive:w-[504px] w-[250px] my-6 p-3 bg-button rounded-lg">
              Ingresar
            </button>

            <div className={message[1] + " text-black p-4 rounded-md italic"}>
              {message[0]}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
