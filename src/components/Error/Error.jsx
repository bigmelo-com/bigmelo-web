import Logo from "../NavBar/Logo";

export default function Error({title, message}) {
  return (
    <div className="bg-primary min-h-screen px-11 pt-4 pb-11 flex flex-col place-items-center space-y-4" >
        <Logo />
        <div className='bg-secondary w-full rounded-xl overflow-hidden flex flex-col place-items-center py-12'>
            <h1 className="text-title text-5xl">{title}</h1>
            <p className="text-paragraph text-xl">{message}</p>
        </div>
    </div>
  )
}
