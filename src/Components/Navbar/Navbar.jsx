import React, {useState, useEffect} from "react";
import {FiSun, FiMoon} from "react-icons/fi";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {useTranslation} from "react-i18next";
import {Link} from "react-scroll";
import logo from "./new logo.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {t, i18n} = useTranslation();

  // Load saved language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  // Function to change language and save it to localStorage
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const navItems = [
    {key: "home", to: "home"},
    {key: "about", to: "about"},
    {key: "services", to: "services"},
    {key: "projects", to: "projects"},
    {key: "experience", to: "experience"},
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 w-full z-10 transition-all duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Apana Construction Logo" className="h-14 w-15" />
          <div className="flex-shrink-0 text-xl md:text-3xl text-orange-600 font-extrabold dark:text-yellow-600">
            {t("logoText")}
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(({key, to}) => (
            <Link
              key={key}
              to={to}
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-200 hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
            >
              {t(key)}
            </Link>
          ))}
        </div>

        {/* Right-Side Buttons */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle Button */}
          <div className="relative hidden md:block">
            <button
              onClick={() =>
                changeLanguage(i18n.language === "en" ? "hi" : "en")
              }
              className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-md cursor-pointer hover:bg-orange-500 dark:hover:bg-orange-600 transition-all"
            >
              <span className="mr-2">
                {i18n.language === "en" ? "हिंदी" : "English"}
              </span>
            </button>
          </div>

          {/* Contact Us Button */}
          <a
            href="https://wa.me/+918928567312"
            target="_blank"
            className="hidden md:block bg-orange-500 dark:bg-orange-600 cursor-pointer text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 dark:hover:bg-orange-700 transition-all shadow-md"
          >
            {t("whatsapp")}
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {isMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 p-4 space-y-2">
          {navItems.map(({key, to}) => (
            <Link
              key={key}
              to={to}
              smooth={true}
              duration={500}
              className="block text-gray-600 dark:text-gray-200 hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(key)}
            </Link>
          ))}

          {/* Mobile Language Toggle Button */}
          <div className="mt-4">
            <button
              onClick={() =>
                changeLanguage(i18n.language === "en" ? "hi" : "en")
              }
              className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-md cursor-pointer hover:bg-orange-500 dark:hover:bg-orange-600 transition-all"
            >
              <span className="mr-2">
                {i18n.language === "en" ? "हिंदी" : "English"}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
