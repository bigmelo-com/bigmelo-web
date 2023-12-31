import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Example(data) {
    const message = [];
    const ref = useRef(null);
    const example = data[data.id];
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    const variants = {
        hidden: {
            opacity: 0, 
            y: 75, 
            display: 'none'
        },
        visible: {
            opacity: 1, 
            y: 0, 
            display: 'block'
        },
        block: {
            opacity: 1, 
            y: 0, 
            display: 'flex'
        },
    }
    let className;
    let delayValue = 1;

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    useEffect(() => {
        if (Number.isInteger(data.id) && isInView) {
            mainControls.start("visible");
        }
    }, [data.id]);

    for(let i in example) {
        if (i%2 == 0 ){

            className = "bg-userMessage rounded-t-lg rounded-bl-lg max-w-[240px] justify-self-end p-2 self-end";

        } else {

            className = "min-w-min max-w-[240px] bg-botMessage rounded-t-lg rounded-br-lg p-2";
            
        }

        message.push(
                <motion.div 
                    key={i}
                    className={className}
                    variants={variants}
                    initial= "hidden"
                    animate= {mainControls}
                    exit="hidden"
                    transition={{
                        duration: 0.75,
                        delay: delayValue
                    }}
                >
                    <p className='self-end'>{example[i]}</p>
                </motion.div>
        )
        
        delayValue += 2;
    }
  return (
    <>
        <motion.div 
            key={data.id}
            ref={ref}
            className={data.className}
            variants={variants}
            initial= "hidden"
            animate= "block"
            exit="exit"
            transition={{
                duration: 0.75,
            }}
            >
            {message}
        </motion.div>
    </>
  )
}
