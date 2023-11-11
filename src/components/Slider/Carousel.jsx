import CarouselItem from "./CarouselItem";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Carousel({id}) {

  const active = "flex bg-button min-w-[24px] min-h-[8px] rounded overflow-hidden";
  const unactive = "flex bg-button opacity-25 w-[8px] h-[8px] rounded overflow-hidden";

  return (
    <>
        <motion.div className="flex flex-col justify-center overflow-hidden">
            <motion.div 
                className="flex"
            >
                <CarouselItem id = {id}/>
            </motion.div>
                <nav className="flex min-w-full max-h-[8px] mb-10 overflow-hidden space-x-4 px-10 sphone:justify-start justify-center">
                    <Link className={active} >.</Link>
                    <Link className={unactive}>.</Link>
                    <Link className={unactive}>.</Link>
                </nav>
        </motion.div>
    </>
  )
}
