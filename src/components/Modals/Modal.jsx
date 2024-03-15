import { motion } from "framer-motion";
import NavLink from "../NavBar/NavLink";

export default function Modal({children, bg_color}) {
    const variants = {
        hidden: {
          y: "-10%",
          opacity: 0
        },
        visible: {
          y: "0",
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: 0.4
          }
        }
      };
  return (
    <motion.div
        className={"fixed z-[100] p-4 rounded-md responsive:max-w-lg max-w-xs text-center text-white h-fit bottom-10 " + bg_color}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
        <NavLink to={'/validate'} linkStyle="flex-col">
            {children}
        </NavLink>
    </motion.div>
  )
}
