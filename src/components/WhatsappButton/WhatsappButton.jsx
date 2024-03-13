import { motion } from "framer-motion";

export default function WhatsappButton() {
  const variants = {
    hidden: {
      opacity: 0,
      y: 75
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <a
      href="https://api.whatsapp.com/send?phone=13217328611&text=Hola!"
      target="_blank"
    >
      <motion.div
        className="fixed responsive:bottom-10 bottom-3 responsive:right-10 right-3 flex flex-col items-center z-50"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1,
          delay: 0.5
        }}
      >
        <img
          src="public/whatsapp_logo.png"
          alt="Whatsapp Button"
          className="w-16"
        />
        <h5 className="text-white text-sm">¡Chatea ahora!</h5>
      </motion.div>
    </a>
  );
}
