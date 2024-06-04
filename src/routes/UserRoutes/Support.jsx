import Base from "/src/components/Base/Base";
import ContactForm from "/src/components/Support/ContactForm";

export default function Support() {
  return (
    <Base>
        <div className="flex flex-col justify-center items-center responsive:p-20 p-10 responsive:mt-0 mt-14">
            <h1 className="text-title text-3xl">Contáctanos</h1>
            <h2 className="text-paragraph text-lg mb-14 text-center">¡Si tienes algúna duda o problemas no dudes en contactarnos!</h2>
            <ContactForm />
        </div>
    </Base>
  )
}
