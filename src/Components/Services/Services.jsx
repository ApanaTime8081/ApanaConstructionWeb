import {useTranslation} from "react-i18next";

const services = [
  {
    id: 1,
    titleKey: "service1Title",
    descriptionKey: "service1Description",
    icon: "🏠",
  },
  {
    id: 2,
    titleKey: "service2Title",
    descriptionKey: "service2Description",
    icon: "🏢",
  },
  {
    id: 3,
    titleKey: "service3Title",
    descriptionKey: "service3Description",
    icon: "🔧",
  },
  {
    id: 4,
    titleKey: "service4Title",
    descriptionKey: "service4Description",
    icon: "📐",
  },
];

const OurServices = () => {
  const {t} = useTranslation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-orange-500 dark:bg-orange-500 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white dark:text-gray-800 mb-6">
          {t("servicesTitle")}
        </h2>
        <p className="text-lg text-white text-center dark:text-gray-700 mb-12">
          {t("servicesSubtitle")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg transform hover:scale-105 hover:shadow-lg transition duration-200"
              style={{maxWidth: "300px", margin: "0 auto"}}
            >
              <div className="text-4xl mb-4 text-blue-500 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-600 text-justify dark:text-gray-300">
                {t(service.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
