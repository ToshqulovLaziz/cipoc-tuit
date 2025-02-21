import { Link } from "react-router-dom";

const PastConferences = () => {
  return (
    <div className="container max-w-full px-4 mx-auto text-center">
      <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
        <div className="flex justify-center items-center flex-col w-full text-center">
          <h2 className="text-[26px] font-bold">Past Conferences</h2>
          <div>
            <Link className="text-[#334cf0] font-bold" to="/">
              HOME
            </Link>
            <span className="font-bold"> / Past Conferences</span>
          </div>
        </div>
      </div>
      <div className="space-y-4 mt-8">
        <Link
          to="https://ieeexplore.ieee.org/xpl/conhome/1000413/all-proceedings"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-lg block"
        >
          View all proceedings of the PAIOC 22025
        </Link>
        <p
          rel="noopener noreferrer"
          className="text-lg block"
        >
          Watch Past Plenaries & Special Talks
        </p>
      </div>
    </div>
  );
};

export default PastConferences;
