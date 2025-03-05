import Slider from "react-slick";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { navbarMenuData } from "../../Utils/navbarMenuData";
import Image1 from "../../assets/video_2.jpg";
import Image2 from "../../assets/tuit_slide_four.jpg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const NavbarMenu = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverDropdown, setHoverDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
      <div className="container max-w-full px-4 mx-auto pt-4">
        <div className="flex justify-between items-center bg-[#1CAF07] text-[#FFFFF7] font-['Inter'] text-[14px]">
          <ul className="hidden lg:flex relative justify-around w-full">
            {navbarMenuData.map((item, index) => (
                <li
                    key={item.id}
                    className={`group py-2 pr-10 max-2xl:pr-5 tracking-[1.1px] relative ${
                        index !== navbarMenuData.length - 1 ? "border-r-2 border-[#FFFFF7]/20" : ""
                    }`}
                    onMouseEnter={() => setHoverDropdown(item.id)}
                    onMouseLeave={() => setHoverDropdown(null)}
                >
                  <Link
                      to={item.link}
                      className="dropdown-toggle hover:text-white transition-colors duration-200 flex items-center"
                  >
                    {item.text}
                  </Link>
                  {item.selected && hoverDropdown === item.id && (
                      <div className="absolute left-[-40px] mt-2 w-[170px] bg-white rounded-xl shadow-lg py-2 z-50">
                        <ul className="flex flex-col">
                          {item.selected.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                    to={subItem.link}
                                    className="block py-2.5 px-4 text-gray-800 hover:bg-[#1CAF07]/10 hover:text-[#1CAF07] transition-colors duration-200 text-sm font-medium"
                                    onClick={() => setHoverDropdown(null)}
                                >
                                  {subItem.text}
                                </Link>
                              </li>
                          ))}
                        </ul>
                      </div>
                  )}
                </li>
            ))}
          </ul>

          <button
              className="lg:hidden ml-auto p-2 font-bold text-[30px] text-[#FFF] rounded hover:bg-[#1A9E06] transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoMdClose/> : <IoMenu/>}
          </button>
        </div>

        {isMenuOpen && (
            <ul className="w-[300px] absolute right-4 z-50 flex flex-col bg-white rounded-xl shadow-lg font-['Inter'] text-[14px] mt-2 overflow-hidden border border-gray-100">
              {navbarMenuData.map((item) => (
                  <li key={item.id} className="border-b border-gray-100 last:border-none">
                    <div
                        className="flex justify-between items-center cursor-pointer px-4 py-3 text-gray-800 hover:bg-[#1CAF07]/10 transition-colors duration-200"
                        onClick={() => toggleDropdown(item.id)}
                    >
                      <span className="font-medium">{item.text}</span>
                    </div>
                    {item.selected && activeDropdown === item.id && (
                        <ul className="bg-gray-50">
                          {item.selected.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                    to={subItem.link}
                                    className="block py-2.5 px-8 text-gray-700 hover:bg-[#1CAF07]/10 hover:text-[#1CAF07] transition-colors duration-200 text-sm"
                                >
                                  {subItem.text}
                                </Link>
                              </li>
                          ))}
                        </ul>
                    )}
                  </li>
              ))}
            </ul>
        )}

        {location.pathname === "/" && (
            <div className="">
              <Slider {...settings}>
                <div>
                  <img
                      src={Image1}
                      alt="Slide 1"
                      className="w-full h-[500px] object-cover max-lg:h-[400px] max-md:h-[300px]"
                  />
                </div>
                <div>
                  <img
                      src={Image2}
                      alt="Slide 2"
                      className="w-full h-[500px] object-cover max-lg:h-[400px] max-md:h-[300px]"
                  />
                </div>
              </Slider>
            </div>
        )}
      </div>
  );
};

export default NavbarMenu;