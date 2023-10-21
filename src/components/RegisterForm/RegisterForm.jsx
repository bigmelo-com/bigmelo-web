import { PhoneInput } from "react-international-phone";
import { changeToken } from "../../redux/tokenSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "react-international-phone/style.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const inputClass =
    "w-[504px] mt-8 p-3 border border-border text-white bg-primary rounded-lg placeholder-white";
  const [message, setMessage] = useState(["", ""]);
  const [value, setValue] = useState("");
  const [post, setPost] = useState({});
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const handleInput = event => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let phone = value.split(" ");
    const full_number = phone.join("");

    setPost({
      ...post,
      country_code: phone.shift(),
      phone_number: phone.join(""),
      full_phone_number: full_number
    });

    axios
      .post("http://localhost:8090/v1/auth/signup", post)
      .then(res => {
        dispatch(changeToken(res.data.access_token));
        setMessage(["¡El usuario fue registrado con exito!", "bg-success"]);
      })
      .catch(err => {
        setMessage([err.response.data.message, "bg-error"]);
        console.log();
      });
  };

  return (
    <div className="flex justify-center pt-[10%] pb-[15%]">
      <div className="flex flex-col text-center max-w-[504px]">
        <form onSubmit={handleSubmit} id="form">
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
            required
          />
          <input
            name="last_name"
            type="text"
            className={inputClass}
            placeholder="Apellido"
            onChange={handleInput}
            required
          />
          <input
            name="email"
            className={inputClass}
            type="email"
            placeholder="Correo electrónico"
            onChange={handleInput}
            required
          />

          <PhoneInput
            className="mt-8"
            value={value}
            onChange={setValue}
            placeholder="Teléfono"
            defaultCountry="co"
            required
          />

          <input
            name="password"
            className={inputClass}
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
            required
          />
          <input
            name="password_confirmation"
            className={inputClass}
            type="password"
            placeholder="Repetir contraseña"
            onChange={handleInput}
            required
          />

          <button className="w-[504px] my-6 p-3 bg-button rounded-lg">
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
