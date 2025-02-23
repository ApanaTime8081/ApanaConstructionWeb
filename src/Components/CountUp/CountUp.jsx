import {useEffect, useState, useRef} from "react";
import {useTranslation} from "react-i18next";
import {FaBuilding, FaSmileBeam, FaTools, FaTrophy} from "react-icons/fa";

const counters = [
  {
    id: 1,
    icon: <FaBuilding className="text-blue-500 text-6xl mb-4" />,
    titleKey: "counter1Title",
    endValue: 120,
  },
  {
    id: 2,
    icon: <FaSmileBeam className="text-yellow-500 text-6xl mb-4" />,
    titleKey: "counter2Title",
    endValue: 300,
  },
  {
    id: 3,
    icon: <FaTools className="text-green-500 text-6xl mb-4" />,
    titleKey: "counter3Title",
    endValue: 30,
  },
  {
    id: 4,
    icon: <FaTrophy className="text-red-500 text-6xl mb-4" />,
    titleKey: "counter4Title",
    endValue: 50,
  },
];

const Counter = ({icon, titleKey, endValue, isVisible}) => {
  const [count, setCount] = useState(0);
  const {t} = useTranslation();

  useEffect(() => {
    if (!isVisible) return; // Only start counting when the section is visible

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = endValue / (duration / 50);
    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, 50);

    return () => clearInterval(counter);
  }, [endValue, isVisible]);

  return (
    <div className="text-center transition-transform transform hover:scale-105">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
        {count}
      </h3>
      <p className="text-lg text-gray-500 dark:text-gray-300 mt-2">
        {t(titleKey)}
      </p>
    </div>
  );
};

const CounterAnimation = () => {
  const {t} = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {threshold: 0.5} // 50% visibility triggers the animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-600 dark:text-orange-600 mb-4">
          {t("achievementsTitle")}
        </h2>
        <p className="text-lg text-gray-700 text-center dark:text-white mb-12">
          {t("achievementsSubtitle")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              icon={counter.icon}
              titleKey={counter.titleKey}
              endValue={counter.endValue}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterAnimation;
