import Logo from '../components/Logo/Logo';
import Footer from "../components/Footer/Footer.jsx";

export default function About() {
    return (
        <>
            <div className="bg-primary min-h-screen px-11 pt-4 pb-11 flex flex-col place-items-center space-y-4" id='about'>
                <Logo />
                <div className='bg-white h-full w-full rounded-xl overflow-hidden flex flex-col p-20 space-y-3 max-w-7xl'>
                    <h1 className="font-bold text-3xl">Sobre Nosotros</h1>
                    <p>
                        Buscamos acercar la tecnología de AI a todos los usuarios a través Whatsapp que es la aplicación
                        de mensajería instantánea más usada.
                    </p>
                    <p>
                        Además, queremos permitir que organizaciones puedan configurar sus propios ChatBots de una
                        manera fácil y amigable para cualquier tipo de proyecto.
                    </p>
                    <p>
                        <strong>Empresa:</strong> Bigmelo S.A.S. <br/>
                        <strong>Dirección:</strong> Carrera 43C # 9-39 Int 506 <br/>
                        <strong>Telefono:</strong> 313929826 <br/>
                        <strong>Email:</strong> bigmelo.com@gmail.com <br/>

                    </p>
                </div>

                <Footer />
            </div>
        </>
    )
}
