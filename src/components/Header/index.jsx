import { Link } from "react-router-dom";
import Scopus from "../../assets/Scopus.webp";
import TatuLogo from "../../assets/TATU_logotip.png";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white py-2">
      <div className="container max-w-6xl px-6 mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Logo and Title Section */}
          <div className="flex items-center gap-4 flex-wrap justify-center text-center sm:text-left">
            <Link className="text-2xl font-bold text-blue-600">OPTIMA-2025</Link>
            <p className="text-gray-700 text-sm sm:text-base max-w-lg">
              Optical Communication, Photonics, Telecommunications, and
              Intelligent Machine Applications (OPTIMA-2025)
              <br className="hidden sm:block" /> December 4th-5th, 2025.
              <br className="hidden sm:block" /> Tashkent, Uzbekistan
            </p>
          </div>
          {/* Logos Section */}
          <div className="flex gap-4 items-center flex-wrap justify-center">
            <img
              src={TatuLogo}
              alt="Tatu Logo"
              className="w-20 sm:w-24 h-auto object-contain"
            />
            <img
              src={Scopus}
              alt="Scopus Logo"
              className="w-32 sm:w-40 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
