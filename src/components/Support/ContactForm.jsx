export default function ContactForm() {
    const inputStyle = "p-4 bg-primary text-white";
    const handleSubmit = () => {
        
    };

  return (
    <form className="flex flex-col space-y-8 w-full responsive:px-20">
        <input className={inputStyle} type="text" placeholder="Nombre" />
        <input className={inputStyle} type="email" placeholder="Correo Electrónico" />
        <textarea className={inputStyle} placeholder="Mensaje"></textarea>
        <button className="bg-button p-3 rounded-lg" type="submit">Enviar</button>
    </form>
  )
}
