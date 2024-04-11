import Base from "../components/Base/Base";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/tokenSlice";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Plans from "../components/Plans/Plans";

export default function Profile() {
  const subTitleClass = "text-title text-2xl";
  const textClass = "text-white text-4xl";
  const [waitingResponse, setWaitingResponse] = useState(false);
  const [userData, setUserData] = useState(false);
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const availableIds = import.meta.env.VITE_PAYMENT_TEST_IDS;
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
      .get(import.meta.env.VITE_LOCAL_API_URL + "/v1/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => {
        navigate('/');
      })
      .finally(() => setWaitingResponse(false));
  }, []);

  return (
    <>
      <Base>
        {userData["remaining_messages"] === 0 && availableIds.includes(userData["email"]) ? 
        <Plans />
        :
        <motion.div 
        className="flex flex-col items-center justify-center text-center space-y-10 my-28 mx-5 responsive:m-28 relative responsive:min-h-[50vh] h-fit border-button border-y-2 shadow-xl shadow-indigo-900/60 responsive:py-3 py-8"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          {waitingResponse && (
            <div className="bg-opacity-60 absolute w-full h-full bg-secondary  z-[5] flex justify-center items-center">
                <div className="h-12 w-12 border-4 border-l-white border-r-white border-b-white border-t-button animate-spin ease-linear rounded-full"></div>
            </div>
          )}
          {userData && (
            <>
              <h2 className={subTitleClass}>Hasta hoy tienes:</h2>
              <p className="text-white text-6xl">
                {userData["remaining_messages"] === "Ilimitado"
                  ? "Mensajes Ilimitados"
                  : userData["remaining_messages"] + " Mensajes"}
              </p>
              <div className="flex responsive:flex-row flex-col responsive:space-x-12 space-x-0 responsive:space-y-0 space-y-12">
                {userData["remaining_messages"] != "Ilimitado" && (
                  <div>
                    <h3 className={subTitleClass}>Mensajes Usados</h3>
                    <p className={textClass}>{userData["used_messages"]}</p>
                  </div>
                )}
                <div>
                  <h3 className={subTitleClass}>
                    Limite de mensajes mensuales
                  </h3>
                  <p className={textClass}>{userData["message_limit"]}</p>
                </div>
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
        
        }
      </Base>
    </>
  );
}
