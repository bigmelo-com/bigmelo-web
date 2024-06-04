import Footer from "./Footer";
import NavbarController from "../NavBar/NavbarController";
import ScrollToAnchor from "../../ScrollToAnchor";

export default function Base({ children, bgColor = "bg-secondary", hasNavigation=true, showModal=true}) {
  const style =
    bgColor +
    " min-h-fit w-full rounded-xl overflow-hidden max-w-7xl pt-0 responsive:mt-[110px] mt-0 flex flex-col";

  return (
    <>
      <div className="bg-primary min-h-screen responsive:px-11 responsive:pt-0 responsive:pb-11 flex flex-col place-items-center relative">
        <div className="flex relative w-full max-w-7xl responsive:p-0 px-6 responsive:justify-center">
          <NavbarController hasNavigation={hasNavigation} showModal={showModal} />
        </div>
        <div className={style}>
            {children}
          <Footer />
        </div>
      </div>
    <ScrollToAnchor />
    </>
  );
}
