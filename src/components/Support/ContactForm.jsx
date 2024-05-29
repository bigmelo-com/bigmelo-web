import { useState } from "react";
import { sendSupportRequest } from "../../api/user";

export default function ContactForm() {
    const inputStyle = "p-4 bg-primary text-white";
    const [waitingResponse, setWaitingResponse] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);
    const [responseMessageBackground, setResponseMessageBackground] = useState("hidden");

    const handleSubmit = (event) => {
      event.preventDefault();
      setWaitingResponse(true);

      const supportData = {
        name: event.target.childNodes[1].value,
        form_email: event.target.childNodes[2].value,
        message: event.target.childNodes[3].value
      };

      sendSupportRequest(supportData)
      .then(res => {
        setResponseMessage("¡Mensaje enviado exitosamente!");
        setResponseMessageBackground("bg-success");
        event.target.reset();
      })
      .catch(err => {
        setResponseMessage(err.message);
        setResponseMessageBackground("bg-error");
      })
      .finally(() => setWaitingResponse(false));  
    };

  return (
    <form className="relative flex flex-col space-y-8 w-full responsive:px-20" onSubmit={handleSubmit}>
        {waitingResponse && (
          <div className="bg-opacity-60 absolute left-0 right-0 h-full bg-secondary  z-[5] flex justify-center items-center">
            <div className="h-12 w-12 border-4 border-l-white border-r-white border-b-white border-t-button animate-spin ease-linear rounded-full"></div>
          </div>
        )}
        <div>
          <p className={"p-7 text-center text-xl " + responseMessageBackground}>
            {responseMessage}
          </p>
        </div>
        <input className={inputStyle} type="text" placeholder="Nombre" required/>
        <input className={inputStyle} type="email" placeholder="Correo Electrónico" required/>
        <textarea className={inputStyle} placeholder="Mensaje" required></textarea>
        <button className="bg-button p-3 rounded-lg" type="submit">Enviar</button>
    </form>
  )
}
