import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-scroll";
import checking from "./checking.jpg";
import "./About.css";

const AboutUs = () => {
  const {t, i18n} = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  // Change language and store preference
  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900 sm:px-6 lg:px-8 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 md:pl-8">
          <h2 className="text-3xl sm:text-4xl text-center font-extrabold text-orange-600 dark:text-orange-600">
            {t("aboutTitle")}
          </h2>
          <p className="text-md text-gray-600 text-justify dark:text-gray-300">
            {t("aboutText1")}
          </p>
          <p className="text-md text-gray-600 text-justify dark:text-gray-300">
            {t("aboutText2")}
          </p>
          <p className="text-md text-gray-600 text-justify dark:text-gray-300">
            {t("aboutText3")}
          </p>
          <div className="flex justify-center">
            <Link
              to="services"
              smooth={true}
              duration={600}
              className="inline-block px-6 cursor-pointer py-3 w-full text-center bg-orange-500 text-white font-medium rounded hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 hover:scale-100 transition"
            >
              {t("learnMore")}
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative group md:pr-8">
          <img
            src={checking}
            alt="About Us"
            className="rounded-lg about shadow-md mt-10 transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
