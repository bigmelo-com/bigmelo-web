import { PhoneInput } from "react-international-phone";
import parsePhoneNumber from 'libphonenumber-js';
import { changeToken } from "../../redux/tokenSlice";
import 'react-international-phone/style.css';
import { useDispatch } from "react-redux";
import { useState } from "react";
import './PhoneInputStyles.css';
import axios from "axios";

export default function RegisterForm({ show = true }) {
  const inputClass =
    "responsive:w-[504px] w-[250px] mt-8 p-3 border border-border text-white bg-primary rounded-lg placeholder-white";
  const componentClass =
    "flex justify-center pt-[10%] pb-[15%]" + (show ? "" : " hidden");
  const [message, setMessage] = useState(["", ""]);
  const [phone, setPhone] = useState("");
  const [post, setPost] = useState({});
  const [waitingResponse, setWaitingResponse] = useState(false);
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const number = parsePhoneNumber(phone);
    setWaitingResponse(true);

    const data = {
      ...post,
      country_code: '+' + number.countryCallingCode,
      phone_number: number.nationalNumber,
      full_phone_number: phone
    }

    axios
      .post(import.meta.env.VITE_LOCAL_API_URL + "/v1/auth/signup", data)
      .then((res) => {
        dispatch(changeToken({ access_token: res.data.access_token, logged: true }));
        setMessage(["¡El usuario fue registrado con exito!", "bg-success"]);
        window.location.href = '/validate';
      })
      .catch((err) => {
        setMessage([err.response.data.message, "bg-error"]);
      }).finally(() => setWaitingResponse(false));
    };
 
    return (
    <div className={componentClass}>
      <div className="flex flex-col text-center responsive:max-w-[504px]">
        <form className="responsive:block flex flex-col items-center relative" onSubmit={handleSubmit} id="form">
          {waitingResponse && (
            <div className="bg-opacity-60 absolute w-full h-full bg-secondary  z-[5] flex justify-center items-center">
              <div className="h-12 w-12 border-4 border-l-white border-r-white border-b-white border-t-button animate-spin ease-linear rounded-full"></div>
            </div>
          )}
          <h3 className="text-title text-[16px] p-2">¡Qué estás esperando!</h3>
          <h2 className="text-paragraph text-[32px] font-medium p-2">
            Registrate
          </h2>

          <input
            name="name"
            type="text"
            className={inputClass}
            placeholder="Nombre"
            onChange={handleInput}
            autoComplete="given-name"
            required
          />
          <input
            name="last_name"
            type="text"
            className={inputClass}
            placeholder="Apellido"
            onChange={handleInput}
            autoComplete="family-name"
            required
          />
          <input
            name="email"
            className={inputClass}
            type="email"
            placeholder="Correo electrónico"
            onChange={handleInput}
            autoComplete="email"
            required
          />

          <PhoneInput
            className="mt-8 responsive:max-w-[504px] max-w-[250px]"
            value={phone}
            onChange={setPhone}
            placeholder="Teléfono"
            defaultCountry="co"
            autoComplete="tel"
            forceDialCode={true}
            required={true}
          />

          <input
            name="password"
            className={inputClass}
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
            autoComplete="new-password"
            required
          />
          <input
            name="password_confirmation"
            className={inputClass}
            type="password"
            placeholder="Repetir contraseña"
            onChange={handleInput}
            autoComplete="new-password"
            required
          />

          <button className="responsive:w-[504px] w-[250px] my-6 p-3 bg-button rounded-lg">
            Registrarme
          </button>
        </form>
        <div className={message[1] + " text-black p-4 rounded-md italic"}>
          {message[0]}
        </div>
      </div>
    </div>
  );
}
