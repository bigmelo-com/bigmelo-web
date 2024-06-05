import Base from "/src/components/Base/Base";
import ValidationForm from "/src/components/UserValidation/ValidationForm";

export default function ValidateUser() {
  return (
    <Base showModal={false}>
      <ValidationForm />
    </Base>
  );
}
