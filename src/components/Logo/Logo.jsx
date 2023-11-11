import { Link, useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <Link
      to={`/`}
      onClick={() => {
        navigate(`/`, { replace: true });
        window.scrollTo({
          top: 0
        });
      }}
    >
      <img className="w-28 pb-6" src="/public/logo.svg " alt="logo" />
    </Link>
  );
}
