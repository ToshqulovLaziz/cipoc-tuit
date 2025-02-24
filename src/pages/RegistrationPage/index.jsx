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
        Important Dates for OPTIMA 2025
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li>
           <strong> Paper Submission Deadline:</strong> August 15, 2025
          </li>
          <li>
           <strong>Notification of Acceptance: </strong> September 30, 2025
          </li>
          <li>
           <strong>Camera-Ready Paper Submission:</strong> October 20, 2025
          </li>
          <li>
           <strong>Early Bird Registration Deadline:</strong> October 30, 2025
          </li>
          <li>
            <strong>Final Registration Deadline: </strong> November 15, 2025
          </li>
          <li>
           <strong>Conference Dates: </strong> December 4–5, 2025
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
        Registration Fees – OPTIMA 2025
        (All fees are subject to 12% VAT)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Standard Fee (USD)</th>
                <th className="border border-gray-300 px-4 py-2">IEEE Members (20% Discount)</th>
                <th className="border border-gray-300 px-4 py-2">Final Fee with 12% VAT</th>
                <th className="border border-gray-300 px-4 py-2">
                IEEE Member Fee with 12% VAT
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-50 text-gray-800">
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                Academicians
                </td>
                <td className="border border-gray-300 px-4 py-2">$100</td>
                <td className="border border-gray-300 px-4 py-2">$80</td>
                <td className="border border-gray-300 px-4 py-2">	$112</td>
                <td className="border border-gray-300 px-4 py-2">$89.60</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                Participants from Developed Countries
                </td>
                <td className="border border-gray-300 px-4 py-2">$150</td>
                <td className="border border-gray-300 px-4 py-2">$120</td>
                <td className="border border-gray-300 px-4 py-2">$168</td>
                <td className="border border-gray-300 px-4 py-2">$134.40</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                Ph.D. Scholars
                </td>
                <td className="border border-gray-300 px-4 py-2">$80</td>
                <td className="border border-gray-300 px-4 py-2">$64</td>
                <td className="border border-gray-300 px-4 py-2">$89.60</td>
                <td className="border border-gray-300 px-4 py-2">$71.68</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                Bachelor's / Master's Students
                </td>
                <td className="border border-gray-300 px-4 py-2">$70</td>
                <td className="border border-gray-300 px-4 py-2">$56</td>
                <td className="border border-gray-300 px-4 py-2">$78.40</td>
                <td className="border border-gray-300 px-4 py-2">$62.72</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mt-3">
          <strong>Additional Notes:</strong> 

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li> IEEE Members: 20% discount on base registration fee (Valid IEEE Membership ID required).</li>
          <li>12% VAT: Applied to all fees as per regulations.</li>
          <li>Early Bird Discount: Register before October 30, 2025, for additional benefits.</li>
          <li>Group Discounts: Available for institutions with 5 or more paper submissions (Contact us for details).</li>
          <li>Payment Methods: [Insert payment details – Online payment, Bank transfer, etc.]</li>
          <li>Refund Policy: [Insert details if applicable].</li>
          <li>
          Register Now: [Insert Registration Link]:{" "}
            <a href="#" className="text-blue-600 underline">
              [Registration Link]
            </a>
          </li>
        </ol>
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
           Fill out the online registration form:{" "}
            <a href="#" className="text-blue-600 underline">
              [Registration Link]
            </a>
          </li>
          <li> Make the payment via credit card/bank transfer.</li>
          <li> Upload the payment confirmation.</li>
          <li>
             Receive a confirmation email with your registration details.
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
        {/* <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Payment Information
        </h3>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong> Bank Transfer Details:</strong>
          </p>
          <p>
             Bank Name: <span className="font-semibold">[Bank Name]</span>
          </p>
          <p>
             Account Number:{" "}
            <span className="font-semibold">[Account Number]</span>
          </p>
          <p>
             SWIFT Code: <span className="font-semibold">[SWIFT Code]</span>
          </p>
          <p>
             Beneficiary: <span className="font-semibold">[Beneficiary]</span>
          </p>
          <p> Reference: &quot;OPTIMA 2025………………….&quot;</p>
        </div>
        <div className="mt-6">
          <p className="text-gray-700">
            <strong> Credit Card Payments:</strong> Available via our secure
            payment gateway.
          </p>
          <p className="text-gray-700">
            Accepted cards:{" "}
            <span className="font-semibold">
              Visa, MasterCard, American Express
            </span>
            .
          </p>
        </div> */}
      </motion.div>
    </div>
  );
};

export default RegistrationPage;
