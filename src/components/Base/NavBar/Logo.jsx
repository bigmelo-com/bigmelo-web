import NavLink from "./NavLink";

export default function Logo({style}) {
  return (
    <NavLink to='/' image='/public/logo.svg' linkStyle={style} />
  );
}
