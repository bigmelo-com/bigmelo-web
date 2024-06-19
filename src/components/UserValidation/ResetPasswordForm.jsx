import { useDispatch } from "react-redux";
import { resetPassword } from "../../api/auth";
import { changeToken } from "../../redux/tokenSlice";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "/src/components/Loading/Loader" ;

export default function ResetPasswordForm() {
    const inputClass = "responsive:w-[504px] w-[250px] mt-8 p-3 border border-border text-white bg-primary rounded-lg placeholder-white";
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [isWaitingResponse, setIsWaitingResponse] = useState(false);
    const refInputPass = useRef(null);
    const refInputPassConfirmation = useRef(null);
    const { token } = useParams();

    const onSubmit = (event) => {
        event.preventDefault();
        setIsWaitingResponse(true);
        dispatch(
            changeToken({ access_token: token, logged: false })
        );

        const password = refInputPass.current.value;
        const passwordConfirmation = refInputPassConfirmation.current.value;

        if (!password) {
            setError("No puedes poner una contraseña vacía");
            setIsWaitingResponse(false);
            return;
        }

        if (password.length < 8) {
            setError("La contraseña debe tener al menos 8 caracteres");
            setIsWaitingResponse(false);
            return;
        }

        if (password !== passwordConfirmation) {
            setError("Las contraseñas no coinciden");
            setIsWaitingResponse(false);
            return;
        }

        resetPassword({
            password: password,
            password_confirmation: passwordConfirmation
        })
        .then(() => window.location.href = "/pass-updated")
        .catch((err) => {
            setError(err.message);
            setIsWaitingResponse(false);
        });
    };

  return (
    <form className="flex flex-col p-10 items-center responsive:mt-0 mt-16 text-center relative">
        {isWaitingResponse && (
            <Loader />
        )}
        <h1 className="text-title text-3xl">Crea una nueva contraseña</h1>
        <h2 className="text-paragraph text-lg mb-6">Asegurate de crear una contraseña segura</h2>
        <div className="flex flex-col space-y-4 mb-8">
            <input ref={refInputPass} type="password" placeholder="Nueva contraseña" className={inputClass} minLength="8" required/>
            <input ref={refInputPassConfirmation} type="password" placeholder="Repite la contraseña" className={inputClass} minLength="8" required/>
        </div>
        <button type="submit" onClick={(event) => onSubmit(event)} className="bg-button text-center p-4 rounded-md hover:bg-button-hover">Actualizar contraseña</button>
        
        {error && (
            <div className="bg-error p-4 rounded-md m-6">
                {error}
            </div>
        )}

    </form>
  )
}
