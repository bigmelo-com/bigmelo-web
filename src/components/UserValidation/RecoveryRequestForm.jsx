export default function RecoveryRequestForm({setIsWaitingResponse, setIsOpen}) {


  return (
    <form className="flex flex-col items-center mt-28 mx-10">
        <p className="text-title text-lg text-center">Ingresa el correo asociado a tu cuenta:</p>
        <input placeholder="Correo electrónico" className="text-center responsive:w-[504px] w-[250px] mt-4 p-3 border border-border text-white bg-primary rounded-lg placeholder-white" type="email" required/>
        <button className="bg-button mt-4 px-4 py-2 rounded-md">Enviar</button>
        <button type="button" onClick={() => setIsOpen(false)} className="underline text-title bg-transparent mt-4" href="/recovery-form">
            Iniciar Sesión
        </button>
    </form>
  )
}
