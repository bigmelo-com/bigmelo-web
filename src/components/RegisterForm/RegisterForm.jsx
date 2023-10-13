export default function RegisterForm() {
  return (
    <div className="flex justify-center pt-[10%] pb-[15%]">
        <div className="flex flex-col text-center max-w-[504px]">
            <form>

                <h3 className="text-title text-[16px] p-2">¡Qué estás esperando!</h3>
                <h2 className="text-paragraph text-[32px] font-medium p-2">Ingresa tus datos</h2>
                <p className="text-paragraph text-[18px] p-2">
                Una vez  te registres dispondrán de <span className="text-white">xxx mensajes</span> para poder consultarle a la inteligencia artificial
                </p>
                
                <input className="w-[504px] mt-8 p-3 border border-border text-white bg-primary rounded-lg placeholder-white" type="email" placeholder="Correo electrónico" />
                <input className="w-[504px] mt-6 p-3 border border-border text-white bg-primary rounded-lg placeholder-white" type="password" placeholder="Contraseña" />
                <select className="w-[504px] mt-6 p-3 border border-border text-white bg-primary rounded-lg placeholder-white" placeholder="País">
                    <option disabled selected hidden>País</option>
                    <option>Colombia</option>
                    <option>Venezuela</option>
                    <option>Ecuador</option>
                </select>
                <input className="w-[504px] mt-6 p-3 border border-border text-white bg-primary rounded-lg placeholder-white" type="text" placeholder="Número de contácto" />
                <button className="w-[504px] mt-6 p-3 bg-button rounded-lg">Registrarme</button>
            </form>
        </div>
    </div>
  )
}
