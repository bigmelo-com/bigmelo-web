import { useEffect } from "react";
import { sendPaymentInfo } from "../../api/plan";

export default function PaymentSuccess() {
    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    
    useEffect(() => {
        const post = {
            preference_id : params.get('preference_id'),
            payment_id : params.get('payment_id'),
            status : params.get('status')
        };

        sendPaymentInfo(post);
    }, []);

  return (
    <div className="flex flex-col text-center responsive:mt-6 m-6 mt-24 p-14 rounded-md bg-button items-center">
        <h1 className="text-5xl text-white pb-4">¡Gracias por tú pago!</h1>
        <p>¡Disfruta de tu nuevo plan!</p>
        <a href={import.meta.env.VITE_WHATSAPP_LINK} className="bg-title hover:bg-cyan-300 p-4 rounded-md mt-3 shadow-2xl shadow-gray-950 cursor-pointer">¡Chatea ahora haciendo click aquí!</a>
    </div>
  )
}
