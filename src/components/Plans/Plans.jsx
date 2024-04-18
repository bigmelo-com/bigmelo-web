import { useEffect, useState } from "react";
import { motion} from "framer-motion";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/tokenSlice";
import PlanCard from "./PlanCard";

export default function Plans() {
    const subTitleClass = "text-title text-2xl";
    const textClass = "text-white text-4xl";
    const [waitingResponse, setWaitingResponse] = useState(false);
    const [plansData, setPlansData] = useState(false);
    const token = useSelector(selectToken);

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

    useEffect(() => {
        setWaitingResponse(true);
        axios
        .get(import.meta.env.VITE_LOCAL_API_URL + "/v1/plan/purchase", {
            headers: {
            Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            setPlansData(res.data.data);
        })
        .catch((err) => {
            navigate('/');
        })
        .finally(() => setWaitingResponse(false));
    }, []);
    return (
        <motion.div
            className="flex flex-col items-center justify-center text-center space-y-10 my-28 mx-5 responsive:m-28 relative grow responsive:min-h-[50vh] h-fit border-button border-y-2 shadow-2xl shadow-indigo-900/60 responsive:py-3 py-8"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {waitingResponse && (
                <div className="bg-opacity-60 absolute w-full h-full bg-secondary  z-30 flex justify-center items-center">
                    <div className="h-12 w-12 border-4 border-l-white border-r-white border-b-white border-t-button animate-spin ease-linear rounded-full"></div>
                </div>
            )}
            {plansData && (
                <>
                    <h1 className="text-title text-2xl">Adquiere un plan:</h1>
                    <div className="flex responsive:flex-row flex-col responsive:space-x-12 space-x-0 responsive:space-y-0 space-y-12 z-20">
                        {
                            plansData.map(plan => {
                                return(
                                    <div key={plan.id}>
                                        <PlanCard planId={plan.id} name={plan.name} description={plan.description} price={plan.price} period={plan.period} waitingResponseState={setWaitingResponse} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <video
                        autoPlay
                        loop
                        muted
                        className="opacity-10 absolute z-10 w-auto min-w-fit min-h-fit max-w-none "
                    >
                        <source src="/public/video.mp4" type="video/mp4" />
                    </video>
                </>
            )}
        </motion.div>
    )
}
