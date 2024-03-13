import { NavHashLink } from 'react-router-hash-link';

export default function NavLink({children, to="", image, linkStyle = "", action=() => {}}) {
    return (
        <NavHashLink
        className={'flex ' + linkStyle}
        to={to}
        onClick={
            action
        }
        >
            {image && (
                <img className="mr-2 w-fit h-fit" src={image} alt="link_image" />
            )}
            {children}
        </NavHashLink>
    )
}
