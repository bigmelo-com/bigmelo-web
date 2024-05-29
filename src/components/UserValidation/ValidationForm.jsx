import { changeToken } from "../../redux/tokenSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-scroll";
import { getValidationCode, validateUser } from "../../api/user";

export default function ValidationForm() {
  const [waitingResponse, setWaitingResponse] = useState(false);
  const [message, setMessage] = useState(["A tu Whatsapp llegó un mensaje con el codigo de validación, porfavor ingresalo", "bg-success"]);
  const [code, setCode] = useState("");
  const [isDisableGetNewCode, setIsDisableGetNewCode] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setWaitingResponse(true);
    const data = {
        validation_code: code.toString()
    };

    validateUser(data)
    .then((res) => {
      dispatch(changeToken({ access_token: res.data.access_token, logged: true }));
      setMessage(["¡Cuenta Activada, ya puedes ingresar a 'Mis Mensajes'!", "bg-success"]);
      location.reload();
      window.location.href = '/profile';
    })
    .catch((err) => {
      setMessage([err.response.data.message, "bg-error"]);
    })
    .finally(() => setWaitingResponse(false));
  };

  const handleGetNewCode = () => {
    setWaitingResponse(true);

    if(!isDisableGetNewCode){
      getValidationCode()
      .then(() => {
        setMessage(["Un nuevo código fue enviado a tu WhatsApp", "bg-success"]);
      })
      .catch((err) => {
        setMessage([err.response.data.message, "bg-error"]);
      })
      .finally(() => setWaitingResponse(false));

      setIsDisableGetNewCode(true);
      setTimeout(() => setIsDisableGetNewCode(false), 60000);
    } else {
      setMessage(["Debes esperar 1 minuto para volver a pedir un código.", "bg-error"]);
      setWaitingResponse(false)
    }
  };

  const handleChange = event => {
    setCode(event.target.value);
  };


  return (
    <>
        <div className="relative">
            {waitingResponse && (
                <div className="bg-opacity-60 absolute w-full h-full bg-secondary  z-[5] flex justify-center items-center">
                    <div className="h-12 w-12 border-4 border-l-white border-r-white border-b-white border-t-button animate-spin ease-linear rounded-full"></div>
                </div>
            )}
            <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-10 my-40 responsive:mx-20 mx-7 relative"
            >
                <div className="flex flex-col items-center">
                    <h1 className="text-title text-3xl text-center">
                    ¡Valida tú cuenta para poder usar Bigmelo!
                    </h1>
                    <h2 className="text-paragraph responsive:text-xl text-base text-center">
                    Recibiste un mensaje en WhatsApp con un codigo de 6 dígitos, ingresalo para
                    activar tu cuenta
                    </h2>
                </div>
                <div className="flex flex-col items-center space-y-3">
                    <input
                        className="responsive:min-w-[600px] min-w-[300px] text-white text-center bg-primary border border-border rounded-lg p-3"
                        type="number"
                        minLength={6}
                        maxLength={6}
                        onChange={handleChange}
                        placeholder="Ingresa aquí tu código de 6 dígitos"
                    />
                    <Link
                    className="text-title underline cursor-pointer text-center"
                    onClick={handleGetNewCode}
                    to=""
                    disabled={isDisableGetNewCode}
                    >
                        ¿No recibiste el codigo? Solicita uno nuevo haciendo click aquí
                    </Link>
                </div>
                <button className="bg-button p-3 rounded-md" type="submit">
                    Validar Código
                </button>
            <div className={message[1] + " flex text-black p-4 rounded-md italic w-1/2 justify-center text-center"}>
            {message[0]}
            </div>
            </form>
        </div>
    </>
  );
}
