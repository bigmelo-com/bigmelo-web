import CarouselItem from "./CarouselItem"
import { motion } from "framer-motion"

export default function Carousel() {

  return (
    <>
        <motion.div className="flex overflow-hidden">
            <motion.div 
                className="flex"
            >
                <CarouselItem id = {0}/>
            </motion.div>
        </motion.div>
    </>
  )
}
