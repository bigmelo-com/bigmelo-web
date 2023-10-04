import Logo from '../Logo/Logo';

export default function Base({children}) {
    return (
        <>
            <div className="bg-primary min-h-screen px-11 pt-4 pb-11 flex flex-col place-items-center space-y-4" >
                <Logo />
                <div className='bg-secondary h-full w-full rounded-xl overflow-hidden'>
                    {children}
                </div>
            </div>
        </>
    )
}
