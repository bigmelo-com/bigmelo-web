export default function NavLink({children, to="", image, linkStyle = "", onClick=() => {}}) {
    const onClickFunction = () => {
        onClick();
        to && (window.location.href = to);
    };
    return (
        <button
        className={'flex items-center ' + linkStyle}
        onClick={onClickFunction}
        >
            {image && (
                <img className="mr-2 w-fit h-fit" src={image} alt="link_image" />
            )}
            {children}
        </button>
    )
}
