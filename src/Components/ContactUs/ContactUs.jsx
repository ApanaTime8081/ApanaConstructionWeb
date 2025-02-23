import {useState} from "react";
import {FaUsers, FaCheckCircle, FaFlask, FaDollarSign} from "react-icons/fa";
import {FireBase} from "./firebase"; // Import Firebase
import {collection, addDoc} from "firebase/firestore";
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next"; // Import useTranslation hook
import "./Style.css";

const ContactSection = () => {
  const {t} = useTranslation(); // Initialize translation

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Select a Service",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(FireBase, "contacts"), formData);
      Swal.fire({
        title: t("contact.successTitle"),
        text: t("contact.successMessage"),
        icon: "success",
        confirmButtonColor: "#ff6600",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Select a Service",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: t("contact.errorTitle"),
        text: t("contact.errorMessage"),
        icon: "error",
        confirmButtonColor: "#ff6600",
      });
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          {t("contact.title")}
        </h2>
        <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 mb-6"></div>
        <div className="flex flex-wrap justify-center gap-6 text-gray-800 dark:text-white mt-4">
          <div className="flex items-center space-x-2">
            <FaUsers className="text-orange-600" />
            <span>{t("contact.professionalStaff")}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-orange-600" />
            <span>{t("contact.satisfaction")}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaFlask className="text-orange-600" />
            <span>{t("contact.testing")}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaDollarSign className="text-orange-600" />
            <span>{t("contact.pricing")}</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 ml-2">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-600 mb-6">
            {t("contact.formTitle")}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none"
                placeholder={t("contact.name")}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none"
                placeholder={t("contact.email")}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none"
                placeholder={t("contact.phone")}
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-white focus:outline-none"
              >
                <option>{t("contact.selectService")}</option>
                <option>{t("contact.construction")}</option>
                <option>{t("contact.renovation")}</option>
                <option>{t("contact.architecture")}</option>
                <option>{t("contact.interiorDesign")}</option>
                <option>{t("contact.other")}</option>
              </select>
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none"
                placeholder={t("contact.message")}
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-all"
            >
              {t("contact.submit")}
            </button>
          </form>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-96 meramap rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60274.592157080064!2d72.8045042083099!3d19.231769843093478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b128b333e163%3A0x985640540577af7e!2sBorivali%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1739684841202!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
