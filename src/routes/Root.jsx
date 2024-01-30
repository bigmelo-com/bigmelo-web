import { selectLogged } from "../redux/tokenSlice";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import Base from "../components/Base/Base";
import { useSelector } from "react-redux";

export default function Root() {

  const logged = useSelector(selectLogged);

  return (
    <>
      <Base>
        <Header />
        <Slider />
        <RegisterForm show={!logged} />
        <WhatsappButton />
      </Base>
    </>
  );
}
