import ValidationForm from "../components/UserValidation/ValidationForm";
import Base from "../components/Base/Base";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { profile } from "../api/user";

export default function ValidateUser() {
  const navigate = useNavigate();

  useEffect(() => {
    profile()
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
      })
  },[]);

  return (
    <Base showModal={false}>
      <ValidationForm />
    </Base>
  );
}
