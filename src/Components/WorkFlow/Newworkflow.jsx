import {useState} from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

import request from "./request.png";
import expert from "./expert.png";
import booking from "./booking.png";
import designs from "./designs.png";
import track from "./track.png";
import settlein from "./settlein.webp";

const steps = [
  {
    title: "workflow.steps.raiseRequest.title",
    description: "workflow.steps.raiseRequest.description",
    image: request,
  },
  {
    title: "workflow.steps.meetExpert.title",
    description: "workflow.steps.meetExpert.description",
    image: expert,
  },
  {
    title: "workflow.steps.bookWithUs.title",
    description: "workflow.steps.bookWithUs.description",
    image: booking,
  },
  {
    title: "workflow.steps.receiveDesigns.title",
    description: "workflow.steps.receiveDesigns.description",
    image: designs,
  },
  {
    title: "workflow.steps.trackTransact.title",
    description: "workflow.steps.trackTransact.description",
    image: track,
  },
  {
    title: "workflow.steps.settleIn.title",
    description: "workflow.steps.settleIn.description",
    image: settlein,
  },
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const {t} = useTranslation();

  return (
    <div className="flex flex-col items-center p-6 w-full">
      {/* Heading and Subheading */}
      <div className="text-center mb-8">
        <h2 className="text-7xl font-bold">{t("workflow.heading")}</h2>
        <p className="mt-2 text-gray-600 text-lg">{t("workflow.subheading")}</p>
      </div>

      {/* Steps Section */}
      <div className="relative flex items-start justify-between w-full max-w-4xl">
        {/* Lines Container */}
        <div className="absolute top-0 left-12 w-[calc(100%-6rem)] z-0">
          {/* Background Line (Gray, Dashed) */}
          <div className="absolute top-6 w-full border-t-2 border-dashed border-gray-300"></div>
          {/* Progress Line (black, Dashed) */}
          <motion.div
            className="absolute top-6 border-t-2 border-dashed border-black"
            initial={{width: "0%"}}
            animate={{width: `${(activeStep / (steps.length - 1)) * 100}%`}}
            transition={{duration: 0.1}}
          ></motion.div>
        </div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center z-1">
            {/* Number inside Circle */}
            <motion.div
              className={`relative w-12 h-12 flex items-center justify-center rounded-full font-bold cursor-pointer border-2 transition-all ${
                activeStep >= index
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black"
              }`}
              whileHover={{scale: 1.3}}
              onClick={() => setActiveStep(index)}
              style={{zIndex: 20}} // Ensure it's above the dashed line
            >
              {index + 1}
            </motion.div>

            {/* Step Title */}
            <h3 className="mt-2 text-sm text-center font-semibold w-24">
              {t(step.title)}
            </h3>
          </div>
        ))}
      </div>

      {/* Image Container */}
      <motion.div
        key={`image-${activeStep}`}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3}}
        className="mt-6 w-full max-w-2xl flex justify-center"
      >
        <img
          src={steps[activeStep].image}
          alt={t(steps[activeStep].title)}
          className="w-full h-64 object-contain"
        />
      </motion.div>

      {/* Text Container */}
      <motion.div
        key={`text-${activeStep}`}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3}}
        className="mt-6 p-4 rounded-lg w-full max-w-2xl flex flex-col items-center gap-4 shadow-md"
      >
        <div className="w-full text-left">
          <h4 className="text-lg font-semibold">
            {t(steps[activeStep].title)}
          </h4>
          <p className="mt-2 text-gray-700">
            {t(steps[activeStep].description)}
          </p>
        </div>
      </motion.div>

      {/* Learn More Clickable Text */}
      <motion.div
        key={`learn-more-${activeStep}`}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3}}
        className="mt-4 w-full max-w-2xl text-center"
      >
        <span
          className="text-orange-500 font-semibold cursor-pointer hover:text-orange-600 transition-colors"
          onClick={() =>
            console.log("Learn More clicked for", t(steps[activeStep].title))
          }
        >
          {t("workflow.learnMore")}
        </span>
      </motion.div>
    </div>
  );
}
