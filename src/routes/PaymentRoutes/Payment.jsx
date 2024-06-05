import Base from "/src/components/Base/Base";
import PaymentFailed from "/src/components/MercadoPago/PaymentFailed";
import PaymentSuccess from "/src/components/MercadoPago/PaymentSuccess";

export default function Payment({success}) {
  return (
    <Base>
        {success ? <PaymentSuccess /> : <PaymentFailed />}
    </Base>
  )
}
