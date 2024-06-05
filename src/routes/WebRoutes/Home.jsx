import WhatsappButton from "/src/components/WhatsappButton/WhatsappButton";
import RegisterForm from "/src/components/RegisterForm/RegisterForm";
import Header from "/src/components/Home/Header";
import Slider from "/src/components/Slider/Slider";
import Base from "/src/components/Base/Base";
import { useSelector } from "react-redux";
import { selectLogged } from "../../redux/tokenSlice";

export default function Home() {

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
