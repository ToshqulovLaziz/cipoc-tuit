// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProgramPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 pb-12">
      <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
        <div className="flex justify-center items-center flex-col w-full text-center">
          <h2 className="text-[26px] font-bold">Program</h2>
          <div>
            <Link className="text-[#334cf0] font-bold" to="/">
              HOME
            </Link>
            <span className="font-bold"> / Program</span>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold">TOPICS</h2>
          <Link to="https://ieee-ipc.org/program/topics/" target="_blank">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-3 bg-white text-blue-700 font-bold py-2 px-4 rounded-lg shadow-md"
            >
              View
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-gray-800">PLENARY SPEAKERS</h2>
          <p className="text-gray-600">Information will be provided in May 2025.</p>
        </motion.div>
        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold text-gray-800">Tutorial Speakers</h2>
          <p className="text-gray-600">Information will be provided in June 2025.</p>
        </motion.div>
        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold text-gray-800">Invited Speakers</h2>
          <p className="text-gray-600">Information will be provided in June 2025.</p>
        </motion.div>
        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-gray-800">SUNDAY PROGRAM</h2>
          <p className="text-gray-600">Coming soon.</p>
        </motion.div>
      </div> */}
      <div>
        <p className="pt-6 text-[24px] font-bold text-red-600">This page will be updated soon</p>
      </div>
    </div>
  );
};

export default ProgramPage;
