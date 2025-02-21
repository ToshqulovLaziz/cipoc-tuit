import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ContactUs from "../components/Contact";
import NavbarMenu from "../components/NavbarMenu";
import Hotelapge from "../pages/HotelPage";
import TourPage from "../pages/TourPage";
import PaperSubmissionpage from "../pages/PaperSubmissionPage";
import PastConferences from "../pages/PastConferences";
import ProgramPage from "../pages/ProgramPage";
import RegistrationPage from "../pages/RegistrationPage";

const Root = () => {
  return (
    <>
      <Header />
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-cipoc" element={<AboutPage />} />
        <Route path="/paper-submission" element={<PaperSubmissionpage />} />
        <Route path="/past-conferences" element={<PastConferences />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/hotel" element={<Hotelapge />} />
        <Route path="/tour" element={<TourPage />} />
      </Routes>
      <ContactUs />
    </>
  );
};

export default Root;
