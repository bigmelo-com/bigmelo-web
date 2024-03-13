import { motion, AnimatePresence } from "framer-motion";
import { items } from "./slideContent/items";

export default function Slide({ id }) {
  const style =
    "min-w-fit responsive-m:min-h-fit responsive-m:p-10 px-8 pt-3 pb-10 flex flex-col responsive-m:justify-center responsive-m:text-left text-center";

  const variants = {
    hidden: {
      x: "-100%",
      opacity: 0
    },

    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.6
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className={style}
        key={id}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {items[id]}
      </motion.div>
    </AnimatePresence>
  );
}
