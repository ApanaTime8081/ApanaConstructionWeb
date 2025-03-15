import {useParams, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

import image_1 from "../Projects/image_1.jpg";
import image_2 from "../Projects/image_2.jpg";
import image_3 from "../Projects/image_3.jpg";
import image_4 from "../Projects/image_4.jpg";
import image_5 from "../Projects/image_5.jpg";
import image_6 from "../Projects/image_6.jpg";
import image_7 from "../Projects/image_7.jpg";
import image_8 from "../Projects/image_8.jpg";
import image_9 from "../Projects/image_9.jpg";
import image_10 from "../Projects/image_10.jpg";
import image_11 from "../Projects/image_11.jpg";
import image_12 from "../Projects/image_12.jpg";
import image_13 from "../Projects/image_13.jpg";
import image_14 from "../Projects/image_14.jpg";
import image_15 from "../Projects/image_15.jpg";
import { FaBuilding, FaPaintRoller, FaRulerCombined } from "react-icons/fa";
import Stages from "./Stages";
import ConstructionServiceSection from "./ConstructionServiceSection";

const ProjectDetails = () => {
  const {t} = useTranslation();
  const {id} = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      category: "construction",
      title: t("project1Title"),
      description: t("project1Description"),
      img: image_1,
    },
    {
      id: 2,
      category: "construction",
      title: t("project2Title"),
      description: t("project2Description"),
      img: image_2,
    },
    {
      id: 3,
      category: "construction",
      title: t("project3Title"),
      description: t("project3Description"),
      img: image_3,
    },
    {
      id: 4,
      category: "architecture",
      title: t("project4Title"),
      description: t("project4Description"),
      img: image_4,
    },
    {
      id: 5,
      category: "architecture",
      title: t("project5Title"),
      description: t("project5Description"),
      img: image_5,
    },
    {
      id: 6,
      category: "architecture",
      title: t("project6Title"),
      description: t("project6Description"),
      img: image_6,
    },
    {
      id: 7,
      category: "building",
      title: t("project7Title"),
      description: t("project7Description"),
      img: image_7,
    },
    {
      id: 8,
      category: "building",
      title: t("project8Title"),
      description: t("project8Description"),
      img: image_8,
    },
    {
      id: 9,
      category: "building",
      title: t("project9Title"),
      description: t("project9Description"),
      img: image_9,
    },
    {
      id: 10,
      category: "renovations",
      title: t("project10Title"),
      description: t("project10Description"),
      img: image_10,
    },
    {
      id: 11,
      category: "renovations",
      title: t("project11Title"),
      description: t("project11Description"),
      img: image_11,
    },
    {
      id: 12,
      category: "renovations",
      title: t("project12Title"),
      description: t("project12Description"),
      img: image_12,
    },
    {
      id: 13,
      category: "interior",
      title: t("project13Title"),
      description: t("project13Description"),
      img: image_13,
    },
    {
      id: 14,
      category: "interior",
      title: t("project14Title"),
      description: t("project14Description"),
      img: image_14,
    },
    {
      id: 15,
      category: "interior",
      title: t("project15Title"),
      description: t("project15Description"),
      img: image_15,
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-700">Project not found</div>
      </div>
    );
  }

  return (
    
      
      <div className="bg-white rounded-lg shadow-lg w-full pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between pr-24 pl-24 pt-2">
          <img
            src={project.img}
            alt={project.title}
            className="w-[30%] h-60 object-cover "
          />
          <img
            src={project.img}
            alt={project.title}
            className="w-[30%] h-60 object-cover "
          />
          <img
            src={project.img}
            alt={project.title}
            className="w-[30%] h-60 object-cover  "
          />
        </div>
        <div className="bg-black w-full h-[130px] flex justify-between items-center px-6 mb-6">
          <div className="text-white pl-60">
            <h3 className="text-xl font-bold">CRN52902</h3>
            <p className="text-gray-400">bannerghatta, Bengaluru</p>
          </div>
          <div className="h-[80%] border border-solid border-gray-500"></div>
          <div className="flex items-center gap-6 text-white pr-60">
            <div className="flex flex-col items-center">
              <FaRulerCombined className="mb-2 text-gray-400" />
              <span>3000 sq.ft.</span>
            </div>
            <div className="flex flex-col items-center">
              <FaBuilding className="mb-2 text-gray-400" />
              <span>G + 1</span>
            </div>
            <div className="flex flex-col items-center">
              <FaPaintRoller className="mb-2 text-gray-400" />
              <span>Classic</span>
            </div>
          </div>
        </div>
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 w-[80%] ml-20">
              <span className="text-orange-500">How </span>
              <span>It All Started</span>
            </h2>
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Mr Pradeep is a working professional who wanted a lovely space for
              his family. He really liked the idea of regular supervision and
              site checks carried out by the project management team.
            </p>
          </div>
        </div>
        <Stages />
        <ConstructionServiceSection />
      </div>
    
  );
};

export default ProjectDetails;
