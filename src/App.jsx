import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import BlogSection from "./Components/Blog/Blog";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import OurServices from "./Components/Services/Services";
import ProjectSection from "./Components/Projects/Projects";
import ExperienceSection from "./Components/Experiences/Experiences";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/experience" element={<ExperienceSection />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
