import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';

export default function Base({children,bgColor = "bg-secondary"}) {

    const style = bgColor + " min-h-fit w-full rounded-xl overflow-hidden max-w-7xl pt-0 mt-0";

    return (
        <>
            <div className="bg-primary min-h-screen px-11 pt-4 pb-11 flex flex-col place-items-center space-y-4" >
                <Logo />
                <div className={style}>
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}
