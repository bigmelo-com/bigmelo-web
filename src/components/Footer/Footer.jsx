import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      className="flex flex-col items-center bg-primary rounded-md m-3 p-5"
      id="footer"
    >
      <Logo className="w-28 pb-6" />
      <nav className="text-white">
        <ul className="flex flex-direction-row justify-content-center text-sm">
          <li className="pr-1">
            <Link
              to={`/about`}
              onClick={() => {
                navigate(`/about`, { replace: true });
                window.scrollTo({
                  top: 0
                });
              }}
            >
              Sobre Nosotros <span className="text-button"> - </span>
            </Link>
          </li>
          <li>
            <Link
              to={`/terms`}
              onClick={() => {
                navigate(`/terms`, { replace: true });
                window.scrollTo({
                  top: 0
                });
              }}
            >
              Términos y condiciones
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
