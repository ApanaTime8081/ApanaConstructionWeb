import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import image_1 from "./image_1.jpg";
import image_2 from "./image_2.jpg";
import image_3 from "./image_3.jpg";
import image_4 from "./image_4.jpg";
import image_5 from "./image_5.jpg";
import image_6 from "./image_6.jpg";
import image_7 from "./image_7.jpg";
import image_8 from "./image_8.jpg";
import image_9 from "./image_9.jpg";
import image_10 from "./image_10.jpg";
import image_11 from "./image_11.jpg";
import image_12 from "./image_12.jpg";
import image_13 from "./image_13.jpg";
import image_14 from "./image_14.jpg";
import image_15 from "./image_15.jpg";

const ProjectSection = () => {
  const {t} = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

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

  const categories = [
    {id: "all", name: t("categoryAll")},
    {id: "construction", name: t("categoryConstruction")},
    {id: "architecture", name: t("categoryArchitecture")},
    {id: "building", name: t("categoryBuilding")},
    {id: "renovations", name: t("categoryRenovations")},
    {id: "interior", name: t("categoryInterior")},
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="bg-orange-500 dark:bg-orange-500 py-16 duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold mb-4 text-white dark:text-gray-800 text-center">
          {t("projectsTitle")}
        </h2>
        <div>
          <p className="text-lg text-white text-center dark:text-gray-700 mb-12">
            {t("projectsSubtitle")}
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-semibold focus:outline-none transition-colors duration-300 ${
                activeCategory === category.id
                  ? "bg-orange-600 text-white"
                  : "bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              } hover:bg-orange-700 hover:text-white`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Carousel */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {slidesPerView: 1},
            768: {slidesPerView: 2},
            1024: {slidesPerView: 3},
          }}
          className="mySwiper"
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="group bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100 mb-4 group-hover:text-orange-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    {t("viewDetails")}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSection;
