import { Link } from "react-router-dom";
const CallForSponsors = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center md:flex-row justify-between mt-[40px]">
      <div className="w-full relative group">
        <div className="py-[113px] text-center text-[50px] text-white bg-call-bg bg-cover bg-no-repeat bg-neutral-300 bg-blend-multiply">
          <h2>CALL FOR SPONSORS</h2>
        </div>
        <div className="absolute inset-0 bg-gray-400 w-full py-8 px-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl text-[#2b2a2a] text-center font-bold mb-4">
              Call for Sponsors
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed mb-5">
              <li className="text-[18px] text-[#fff]">
                Advertise your products
              </li>
              <li className="text-[18px] text-[#fff]">
                Advertise your company as an interesting place to work
              </li>
              <li className="text-[18px] text-[#fff]">
                Support transfer of knowledge and innovation
              </li>
              <li className="text-[18px] text-[#fff]">
                Support the presentation of TUIT
              </li>
            </ul>
          </div>
          <div className="text-center">
            <Link className="bg-black text-white text-sm font-bold py-3 px-5 rounded hover:bg-gray-800 transition">
              CLICK FOR DETAILS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForSponsors;
