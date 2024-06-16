import { useState } from "react";
import { sendRecoveryRequest } from "../../api/auth";

export default function RecoveryRequestForm({setIsWaitingResponse, setIsOpen}) {
  const [response, setResponse] = useState(null);
  const [email, setEmail] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsWaitingResponse(true);

    sendRecoveryRequest(email)
    .then(res => {
      setResponse(["¡Correo de recuparación enviado, revisa tu correo! ", true]);
    })
    .catch(err => {
      const errorStatus = err.response.status;

      if (errorStatus === 404) {
        setResponse(["No existe una cuenta vinculada a ese correo", false]);
      } else {
        setResponse([err.message, false]);
      }

    })
    .finally(() => setIsWaitingResponse(false));
  };

  return (
    <form className="flex flex-col items-center mt-28 mx-10">

        <p className="text-title text-lg text-center">Ingresa el correo asociado a tu cuenta:</p>
        <input onChange={event => setEmail(event.target.value)} placeholder="Correo electrónico" className="text-center responsive:w-[504px] w-[250px] mt-4 p-3 border border-border text-white bg-primary rounded-lg placeholder-white" type="email" required/>
        <button onClick={event => handleSubmit(event)} className="bg-button mt-4 px-4 py-2 rounded-md">Enviar</button>

        <button type="button" onClick={() => setIsOpen(false)} className="underline text-title bg-transparent mt-4" href="/recovery-form">
            Inicia Sesión
        </button>

        {response && (
          <div className={"p-4 mt-4 rounded-md" + (response[1] ? ' bg-success' : ' bg-error')}>
            {response[0]}
          </div>
        )}

    </form>
  )
}
