import Header from '../components/Header/Header';
import Base from '../components/Base/Base';
import Slider from '../components/Slider/Slider';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import WhatsappButton from '../components/WhatsappButton/WhatsappButton';

export default function Root() {
    return (
        <>
            <Base>
                <Header />
                <Slider />
                <RegisterForm show={false}/>
                <WhatsappButton />
            </Base>
        </>
    );
    }