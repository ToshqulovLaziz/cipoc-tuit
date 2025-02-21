import { Link } from "react-router-dom";
import Scopus from "../../assets/Scopus.webp";
import TatuLogo from "../../assets/TATU_logotip.png";
const Header = () => {
  return (
    <header>
      <div>
        <div className="container max-w-full px-4 mx-auto">
          <div className="flex justify-between items-center py-2 max-[850px]:flex-col max-[850px]:pt-5">
            <div className="flex items-center gap-3 max-sm:flex-col">
              <Link className="text-[28px] font-bold text-[#2b60c2]">
                CIPOC
              </Link>
              <p className="text-[16px] max-lg:text-xs max-[850px]:text-[14px] max-sm:w-[70%] max-sm:text-center">
                <span className="text-[#787474]">
                  Current Issues in Photonics and Optical Communication
                  (CIPOC-2025)
                </span>{" "}
                <br /> October 23th-24nd, 2025. <br /> Tashkent, Uzbekistan
              </p>
            </div>
            <div className="flex gap-2 items-center max-[850px]:pt-2 max-[850px]:gap-10">
              <img
                src={TatuLogo}
                alt="TatuLogo"
                className="w-[100px] max-lg:w-[80px]"
              />
              <img src={Scopus} alt="Scopus" className="w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
