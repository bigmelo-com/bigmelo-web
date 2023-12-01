import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react'
import Slide from "./Slide";
import { Link } from "react-router-dom";
import Phone from "./Phone";
import { example } from './slideContent/examples';

export default function Slider() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const active = "flex bg-button min-w-[24px] min-h-[8px] rounded overflow-hidden";
  const unactive = "flex bg-button opacity-25 w-[8px] h-[8px] rounded overflow-hidden";
  const [linkClass, setLinkClass] = useState([active,unactive,unactive]);

  useEffect(() => {
    if (isInView) {
        mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div id="slider"></div>

      <motion.div 
        className="responsive:px-16 px-4 responsive:pb-[200px] pb-[50px] sphone:pt-20 pt-5 m-auto sphone:grid sphone:grid-cols-1 sphone:content-center" 
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

        <div className="bg-primary slider-text:max-h-[370px] sphone:max-h-[400px] max-h-max flex flex-col sphone:flex-row rounded-lg phone:pl-44 sphone:pr-6 responsive:px-16 sphone:pt-0 pt-10 ">

          <Phone {...example} id={currentSlide} />

          <div className="flex flex-col justify-center overflow-hidden">
            <div className="flex">
                  <Slide id = {currentSlide}/>
            </div>
                <nav className="flex min-w-full max-h-[8px] mb-10 overflow-hidden space-x-4 px-10 sphone:justify-start justify-center">
                    <Link className={linkClass[0]} onClick={() => {setLinkClass([active, unactive, unactive]); setCurrentSlide(0)}}>.</Link>
                    <Link className={linkClass[1]} onClick={() => {setLinkClass([unactive, active, unactive]); setCurrentSlide(1)}}>.</Link>
                    <Link className={linkClass[2]} onClick={() => {setLinkClass([unactive, unactive, active]); setCurrentSlide(2)}}>.</Link>
                </nav>
          </div>

        </div>
      </motion.div>
    </>
  )
}

