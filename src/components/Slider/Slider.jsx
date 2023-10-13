import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react'
import Phone from "./Phone";
import Carousel from './Carousel';

export default function Slider() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
        mainControls.start("visible");
    }
  }, [isInView]);

  const example = {
    1 : [
    'Hola',
    'Hola! ¿En qué puedo ayudarte como consumidor?',
    'Page por un producto y lo encontre mas economico en otro lugar y no me quieren devolver el dinero',
    'Según el artículo 35 del Estatuto del Consumidor, si no aceptaste expresamente el producto, el proveedor no puede renovar el ofrecimiento si esto te genera un costo....'
    ],

    2 : [
      'Hola',
      'Hola!'
    ]
  }

  return (
    <motion.div 
      className="px-16 pb-[200px] pt-20 m-auto sphone:grid sphone:grid-cols-1 sphone:content-center" id="slider"
      variants={{
        hidden: {opacity: 0, y:100},
        visible: {opacity: 1, y:0}
      }}
      initial = "hidden"
      animate = {mainControls}
      transition={{
        duration: 0.75,
        delay: 0.5
      }}
    >
      <h2 className="text-paragraph text-[32px] text-center sphone:pb-[160px] pb-[16px]" ref={ref}>
        Con bigmelo podrás
      </h2>
      <div className="bg-primary sphone:max-h-[334px] max-h-max flex flex-col sphone:flex-row rounded-lg phone:pl-44 sphone:pr-6 px-16 sphone:pt-0 pt-10">
        <Phone {...example} id={1} />
        <Carousel />
      </div>
    </motion.div>
  )
}

