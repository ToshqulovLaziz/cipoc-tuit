// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 pb-12">
      <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
        <div className="flex justify-center items-center flex-col w-full text-center">
          <h2 className="text-[26px] font-bold">Contact</h2>
          <div>
            <Link className="text-[#334cf0] font-bold" to="/">
              HOME
            </Link>
            <span className="font-bold"> / Contact</span>
          </div>
        </div>
      </div>
      <div>
        <p className="pt-6 text-[24px] font-bold text-red-600">This page will be updated soon</p>
      </div>
    </div>
  );
};

export default ContactPage;
