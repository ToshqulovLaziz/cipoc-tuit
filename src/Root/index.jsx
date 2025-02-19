import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-cipoc" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default Root;
