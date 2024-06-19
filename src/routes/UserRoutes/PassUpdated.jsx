import Base from "/src/components/Base/Base";

export default function PassUpdated() {
  return (
    <Base>
        <div className="flex flex-col bg-button p-8 m-8 responsive:mt-8 mt-20 rounded-md text-center">
            <h1 className="text-white text-4xl">¡Tu contraseña fue actualizada con exito!</h1>
            <p className="text-paragraph">Ya puedes iniciar sesión con tu nueva contraseña en la opción "Ingresar" del menú</p>
        </div>
    </Base>
  )
}
