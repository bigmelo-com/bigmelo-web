import Base from '../components/Base/Base';

export default function About() {
    return (
        <>
            <Base bgColor='bg-white'>
                <div className='p-20 space-y-3 mt-11'>
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
            </Base>
        </>
    )
}
