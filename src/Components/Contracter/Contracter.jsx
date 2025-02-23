import {useState, useRef, useEffect} from "react";
import {useTranslation} from "react-i18next";
import image_1 from "./image_1.jpg";
import image_2 from "./image_2.jpg";
import image_4 from "./image_4.jpg";
import image_5 from "./image_5.jpg";
import image_6 from "./image_6.jpg";

const ContractorSection = () => {
  const {t, i18n} = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [contractors, setContractors] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    setContractors([
      {
        id: 1,
        title: t("architect"),
        description: t("architectDesc"),
        img: image_1,
      },
      {
        id: 2,
        title: t("civilEngineer"),
        description: t("civilEngineerDesc"),
        img: image_2,
      },
      {id: 3, title: t("mason"), description: t("masonDesc"), img: image_4},
      {
        id: 4,
        title: t("carpenter"),
        description: t("carpenterDesc"),
        img: image_4,
      },
      {
        id: 5,
        title: t("electrician"),
        description: t("electricianDesc"),
        img: image_5,
      },
      {id: 6, title: t("plumber"), description: t("plumberDesc"), img: image_6},
      {id: 7, title: t("welder"), description: t("welderDesc"), img: image_1},
      {id: 8, title: t("painter"), description: t("painterDesc"), img: image_2},
      {
        id: 9,
        title: t("tileSetter"),
        description: t("tileSetterDesc"),
        img: image_4,
      },
      {id: 10, title: t("roofer"), description: t("rooferDesc"), img: image_4},
      {
        id: 11,
        title: t("popDesigner"),
        description: t("popDesignerDesc"),
        img: image_5,
      },
      {
        id: 12,
        title: t("rentalTent"),
        description: t("rentalTentDesc"),
        img: image_6,
      },
    ]);
  }, [i18n.language]); // Re-run when language changes

  const toggleView = () => {
    setShowAll(!showAll);
    if (showAll) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    }
  };

  const visibleContractors = showAll ? contractors : contractors.slice(0, 5);

  return (
    <section ref={sectionRef} id="Contractor" className="bg-orange-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          {t("meetContractors")}
        </h2>
        <p className="text-lg text-white text-center mb-10">
          {t("contractorIntro")}
        </p>

        {/* Contractor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleContractors.map((contractor) => (
            <div
              key={contractor.id}
              className="group bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={contractor.img}
                  alt={contractor.title}
                  className="w-full h-56 object-cover transition-all duration-300 rounded-xl border-8 border-white group-hover:border-transparent"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-orange-500 transition-colors">
                  {contractor.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {contractor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={toggleView}
            className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg transition-all duration-300 hover:bg-orange-600 hover:text-white"
          >
            {showAll ? t("viewLess") : t("viewMore")}
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-300">
            {t("moreDetails")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContractorSection;
