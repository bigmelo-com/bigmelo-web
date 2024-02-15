import Base from "../components/Base/Base";
import ValidationForm from "../components/UserValidation/ValidationForm";

export default function ValidateUser() {
  return (
    <Base checkRole={false} backButton={true}>
      <ValidationForm />
    </Base>
  );
}
