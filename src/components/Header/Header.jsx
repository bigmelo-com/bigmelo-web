import { Link } from "react-scroll/modules"

export default function Header () {

    return(
        <header
        className="relative flex items-center justify-center h-fit overflow-hidden text-center"
        >
            <div
                className="relative z-30 text-2x h-full w-full flex flex-col items-center justify-center sm:px-8 py-36 md:px-36"
            >
                <div className="flex flex-col items-center">

                    <h1 className="text-title text-6xl font-light mb-4 mx-4">
                        ¡Pregunta lo que sea!
                    </h1>
                    <p className="text-paragraph font-light w-3/4 m-4">
                        Aprovecha todo el poder de la inteligencia artificial en tu WhatsApp. Investiga, aprende o simplemente diviértete preguntando lo que quieras.
                    </p>

                    <Link className="bg-button p-4 rounded-xl m-4 font-medium cursor-pointer" to="footer" spy={true} smooth={true} offset={50} duration={500} >Cónocer más</Link>

                    <img className="m-6" src="../public/more.svg" alt="more" />

                </div>
                
                    <p className="text-paragraph text-3xl font-light m-4 w-full">
                    Bigmelo potencia lo mejor de la inteligencia artificial dentro de whatsapp, para brindarte una <span className="text-title">experiencia más práctica y sencilla</span>. Así que no lo pienses más y comienza a preguntar lo que quieras.
                    </p>

            </div>
            <video
                autoPlay
                loop
                muted
                className="opacity-10 absolute z-10 w-auto min-w-full min-h-full max-w-none "
            >
            <source
                src="/public/video.mp4"
                type="video/mp4"
            />
            </video>
        </header>
    )
}