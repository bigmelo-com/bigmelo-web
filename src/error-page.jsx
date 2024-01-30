import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Logo from "./components/Base/Logo";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <>
            <div className="bg-primary min-h-screen px-11 pt-4 pb-11 flex flex-col place-items-center space-y-4" >
                <Logo />
                <div className='bg-secondary w-full rounded-xl overflow-hidden flex flex-col place-items-center'>
                    <h1 className="text-title text-5xl mt-12">Oops!</h1>
                    <p className="text-paragraph text-xl">Sorry, an unexpected error has occurred.</p>
                    <p className="mb-12">
                    <i className="text-button text-xl" >{error.statusText || error.message}</i>
                    </p>
                </div>
            </div>
        </>
    );
}