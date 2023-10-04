import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

export function App() {
    return(
        <>
            <div className="bg-primary min-h-screen px-11 pt-4 pb-11 flex flex-col place-items-center space-y-4" >
                <img src="/public/logo.svg " alt="logo" />
                <div className='bg-secondary h-full w-full rounded-xl overflow-hidden'>
                    <Header />
                    <Footer />
                </div>
            </div>
        </>
    )
}