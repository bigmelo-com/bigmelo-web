import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Base from '../components/Base/Base';

export default function Root() {
    return (
        <>
            <Base>
                <Header />
                <Footer />
            </Base>
        </>
    );
    }