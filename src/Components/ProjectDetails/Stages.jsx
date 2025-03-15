import {useState} from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

import image_12 from "../Projects/image_12.jpg";
import image_13 from "../Projects/image_13.jpg";
import image_14 from "../Projects/image_14.jpg";
import image_15 from "../Projects/image_15.jpg";

const steps = [
  {
    title: "Internal Plaster",
    description: "workflow.steps.raiseRequest.description",
    image: image_12,
  },
  {
    title: "External Plaster",
    description: "workflow.steps.meetExpert.description",
    image: image_13,
  },
  {
    title: "Flooring",
    description: "workflow.steps.bookWithUs.description",
    image: image_14,
  },
  {
    title: "Finished External Image",
    description: "workflow.steps.receiveDesigns.description",
    image: image_15,
  },
];

export default function Stages() {
  const [activeStep, setActiveStep] = useState(0);
  const {t} = useTranslation();

  return (
    <div className="flex flex-col items-center p-6 w-full bg-orange-100">
      {/* Heading and Subheading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Different Stages</h2>
        <h2 className="text-2xl font-bold">of Journey</h2>
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
              className={`relative !z-auto w-12 h-12 flex items-center justify-center rounded-full font-bold cursor-pointer border-2 transition-all ${
                activeStep >= index
                  ? "bg-black text-white border-black z-0"
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
    </div>
  );
}
