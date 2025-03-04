import { Link } from "react-router-dom";
import TatuLogo from "../../assets/TATU_logotip.png";

const Header = () => {
  return (
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container max-w-7xl px-4 mx-auto py-1">
          <div className="flex justify-between items-center gap-8">
            {/* Logo and Conference Info */}
            <div className="flex items-center gap-6">
              {/* OPTIMA Logo */}
              <div className="flex flex-col items-start border-r pr-6 border-gray-200">
                <Link to="/" className="text-3xl font-bold text-gray-900 tracking-tight">
                  OPTIMA
                  <span className="text-blue-600"> 2025</span>
                </Link>
                <span className="text-gray-600 text-xs font-medium">
                International Conference
              </span>
              </div>

              {/* Conference Details */}
              <div className="hidden lg:block">
                <h2 className="text-gray-800 text-sm font-medium leading-snug">
                  Optical Communication, Photonics, Telecommunications,
                  <br />
                  and Intelligent Machine Applications
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  December 4-5, 2025-y
                </p>
              </div>
            </div>

            {/* Institution Logo */}
            <div className="flex items-center">
              <img
                  src={TatuLogo}
                  alt="TATU Logo"
                  className="w-28 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;