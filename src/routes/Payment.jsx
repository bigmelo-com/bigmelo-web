import Base from "../components/Base/Base.jsx";
import PaymentFailed from "../components/MercadoPago/PaymentFailed.jsx";
import PaymentSuccess from "../components/MercadoPago/PaymentSuccess.jsx";

export default function Payment({success}) {
  return (
    <Base>
        {success ? <PaymentSuccess /> : <PaymentFailed />}
    </Base>
  )
}
