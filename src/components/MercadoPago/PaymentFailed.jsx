export default function PaymentFailed() {
  return (
    <div className="flex flex-col text-center responsive:mt-6 m-6 mt-24 p-14 rounded-md bg-error items-center">
        <h1 className="text-5xl text-white pb-4">¡Oops! Algo salió mal</h1>
        <p>Porfavor intenta hacer nuevamente tu compra</p>
        <a href="/profile" className="bg-button hover:bg-cyan-300 p-4 rounded-md mt-3 shadow-2xl shadow-gray-950 cursor-pointer">¡Intentalo nuevamente!</a>
    </div>
  )
}
