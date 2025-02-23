import {useTranslation} from "react-i18next";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const {t} = useTranslation(); // Initialize translation

  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              {t("footer.companyName")}
            </h3>
            <p className="text-gray-200">{t("footer.description")}</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>{t("footer.address")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-orange-500" />
                <span>{t("footer.phone")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-orange-500" />
                <span>{t("footer.email")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="hover:text-orange-500 hover:underline transition"
                >
                  {t("footer.servicesLink")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-orange-500 transition hover:underline"
                >
                  {t("footer.projectsLink")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-500 transition hover:underline"
                >
                  {t("footer.aboutLink")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition hover:underline"
                >
                  {t("footer.contactLink")}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-orange-500 transition hover:underline ml-1"
                >
                  {t("footer.faqLink")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2">
              <li>{t("footer.residential")}</li>
              <li>{t("footer.commercial")}</li>
              <li>{t("footer.renovation")}</li>
              <li>{t("footer.architecture")}</li>
              <li>{t("footer.interiorDesign")}</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-4">
              {t("footer.followUs")}
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/apanaconstruction?igsh=bmtzOHRsNjVpaWFx"
                target="_blank"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/apana-time/"
                target="_blank"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            {t("footer.rights", {year: new Date().getFullYear()})}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
