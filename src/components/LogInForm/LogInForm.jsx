import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeToken } from "../../redux/tokenSlice";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import Loader from '/src/components/Loading/Loader';

export default function LogInForm({toggleLoginForm}) {
  const inputClass =
    "responsive:w-[504px] w-[250px] mt-8 p-3 border border-border text-white bg-primary rounded-lg placeholder-white";
  const [post, setPost] = useState({});
  const [response, setResponse] = useState(['','']);
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeLogInForm = () => {
    toggleLoginForm(false);
  };

  const handleInput = (event) => {
      setPost({ ...post, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsWaitingResponse(true)

    login(post)
    .then((res) => {
        dispatch(
        changeToken({ access_token: res.data.access_token, logged: true })
        );
        navigate('/profile');
    })
    .catch((err) => {
      setResponse([err.response.data.message, "bg-error"]);
    })
    .finally(() => setIsWaitingResponse(false));
  }

  return (
    <>
        <button onClick={closeLogInForm}>
        <img
            className="fixed w-6 top-10 right-10 z-[71]"
            src="/public/close_button.svg"
            alt="close-button"
        />
        </button>
        <div className="flex justify-center fixed inset-0 bg-black z-[70] backdrop-blur-sm bg-opacity-50 overscroll-y-none">
          {isWaitingResponse && (
            <Loader />
          )}
          <form
            className="flex flex-col items-center mt-20"
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
            <div className={response[1] + " text-black p-4 rounded-md italic"}>
              {response[0]}
            </div>
          </form>
        </div>
    </>
  )
}
