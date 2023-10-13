import { motion } from "framer-motion"

export default function CarouselItem({id}) {
  const items = [
    <>
      <motion.div 
        className=" sphone:min-w-[489px] sphone:p-10 px-8 pt-3 pb-10 flex flex-col sphone:justify-center sphone:text-left text-center"
      >
          <p className="text-title ">01.</p>
          <h2 className="text-title text-[32px]">Conversa de todos los temas</h2>
          <p className="text-paragraph">
          Bigmelo junto al poder de la inteligencia artificial, resolvera cualquier pregunta o situación que te sea útil. Escribe historias, mensajes, canciones, cualquier cosas que se te ocurrra.
          </p>
      </motion.div>
    </>,
    <>
      <motion.div 
        className=" sphone:min-w-[489px] sphone:p-10 px-8 pt-3 pb-10 flex flex-col sphone:justify-center sphone:text-left text-center"
      >
          <p className="text-title ">02.</p>
          <h2 className="text-title text-[32px]">Conversa de todos los temas</h2>
          <p className="text-paragraph">
          Bigmelo junto al poder de la inteligencia artificial, resolvera cualquier pregunta o situación que te sea útil. Escribe historias, mensajes, canciones, cualquier cosas que se te ocurrra.
          </p>
      </motion.div>
    </>
  ]
  return (
    items[id]
  )
}
