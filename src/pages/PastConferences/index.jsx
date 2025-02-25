import { Link } from "react-router-dom";

const PastConferences = () => {
  return (
    <div className="container max-w-full px-4 mx-auto text-center">
      <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
        <div className="flex justify-center items-center flex-col w-full text-center">
          <h2 className="text-[26px] font-bold">Organizing Committtee</h2>
          <div>
            <Link className="text-[#334cf0] font-bold" to="/">
              HOME
            </Link>
            <span className="font-bold"> / Organizing Committtee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastConferences;
