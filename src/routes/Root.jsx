import Header from '../components/Header/Header';
import Base from '../components/Base/Base';
import Slider from '../components/Slider/Slider';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function Root() {
    return (
        <>
            <Base>
                <Header />
                <Slider />
                <RegisterForm />
            </Base>
        </>
    );
    }