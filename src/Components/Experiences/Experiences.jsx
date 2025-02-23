import {Link} from "react-scroll";
import {useTranslation} from "react-i18next";
import exp from "./exp.jpg";
import "./style.css";

const ExperienceSection = () => {
  const {t} = useTranslation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-orange-600 dark:text-orange-600 mb-4">
          {t("experienceTitle")}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-200 mb-12">
          {t("experienceSubtitle")}
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="transform hover:scale-105 transition-transform duration-300 md:pr-10">
          <img
            src={exp}
            alt="Experience"
            className="rounded-lg shadow-md ml-5 experience"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:pl-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-600 dark:text-orange-600 mb-6">
            {t("experienceYears")}
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-6 text-justify">
            {t("experienceDescription1")}
          </p>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-6 text-justify">
            {t("experienceDescription2")}
          </p>
          <Link
            to="project"
            smooth={true}
            duration={600}
            className="px-6 py-3 text-white flex justify-center cursor-pointer w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 font-semibold rounded-lg hover:scale-100 transition shadow-lg duration-300"
          >
            {t("viewProjects")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
