import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 pb-12">
      <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
        <div className="flex justify-center items-center flex-col w-full text-center">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Registration
          </motion.h2>
          <div>
            <Link className="text-[#334cf0] font-bold" to="/">
              HOME
            </Link>
            <span className="font-bold"> / Registration</span>
          </div>
        </div>
      </div>

      {/* Important Dates */}
      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Important Dates
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li>
            📅 <strong>Early Bird Registration Deadline:</strong> 1/08/2025
          </li>
          <li>
            📅 <strong>Regular Registration Deadline:</strong> 15/09/2025
          </li>
          <li>
            📅 <strong>Late Registration Deadline:</strong> 30/10/2025
          </li>
        </ul>
      </motion.div>

      {/* Registration Fees */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Registration Fees
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Early Bird</th>
                <th className="border border-gray-300 px-4 py-2">Regular</th>
                <th className="border border-gray-300 px-4 py-2">
                  Late/On-site
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-50 text-gray-800">
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Regular Participant
                </td>
                <td className="border border-gray-300 px-4 py-2">$XXX</td>
                <td className="border border-gray-300 px-4 py-2">$XXX</td>
                <td className="border border-gray-300 px-4 py-2">$XXX</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  IEEE/OSA/SPIE Member
                </td>
                <td className="border border-gray-300 px-4 py-2">$XXX</td>
                <td className="border border-gray-300 px-4 py-2">$XXX</td>
                <td className="border border-gray-300 px-4 py-2">$XXX</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Accompanying Person
                </td>
                <td className="border border-gray-300 px-4 py-2">$XXX</td>
                <td className="border border-gray-300 px-4 py-2">$XXX</td>
                <td className="border border-gray-300 px-4 py-2">$XXX</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mt-3">
          <strong>Note:</strong> The fee includes access to all conference
          sessions, materials, coffee breaks, and welcome reception. Banquet
          dinner & workshops may require extra payment.
        </p>
      </motion.div>

      {/* Registration Process */}
      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-md mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Registration Process
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            📝 Fill out the online registration form:{" "}
            <a href="#" className="text-blue-600 underline">
              [Registration Link]
            </a>
          </li>
          <li>💳 Make the payment via credit card/bank transfer.</li>
          <li>📤 Upload the payment confirmation.</li>
          <li>
            📩 Receive a confirmation email with your registration details.
          </li>
        </ol>
      </motion.div>

      {/* Payment Information */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Payment Information
        </h3>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>💰 Bank Transfer Details:</strong>
          </p>
          <p>
            🏦 Bank Name: <span className="font-semibold">[Bank Name]</span>
          </p>
          <p>
            🔢 Account Number:{" "}
            <span className="font-semibold">[Account Number]</span>
          </p>
          <p>
            🌍 SWIFT Code: <span className="font-semibold">[SWIFT Code]</span>
          </p>
          <p>
            👤 Beneficiary: <span className="font-semibold">[Beneficiary]</span>
          </p>
          <p>📌 Reference: &quot;PAIOC 2025………………….&quot;</p>
        </div>
        <div className="mt-6">
          <p className="text-gray-700">
            <strong>💳 Credit Card Payments:</strong> Available via our secure
            payment gateway.
          </p>
          <p className="text-gray-700">
            Accepted cards:{" "}
            <span className="font-semibold">
              Visa, MasterCard, American Express
            </span>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegistrationPage;
