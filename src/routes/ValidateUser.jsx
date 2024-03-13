import ValidationForm from "../components/UserValidation/ValidationForm";
import Base from "../components/Base/Base";
import { selectToken } from "../redux/tokenSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

export default function ValidateUser() {
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_LOCAL_API_URL + "/v1/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
      })
  },[]);

  return (
    <Base backButton={true} showModal={false}>
      <ValidationForm />
    </Base>
  );
}
