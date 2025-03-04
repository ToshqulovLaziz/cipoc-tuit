import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
      <div className="min-h-screen bg-gray-50/30">
        {/* Hero Section */}
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
            <div className="flex justify-center items-center flex-col w-full text-center">
              <h2 className="text-[26px] font-bold">Registration</h2>
              <div>
                <Link className="text-[#334cf0] font-bold" to="/">
                  HOME
                </Link>
                <span className="font-bold"> / Registration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8">
            {/* Important Dates Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="font-['Inter'] text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="h-8 w-1 bg-blue-600 rounded-full mr-4"></div>
                  Important Dates for OPTIMA 2025
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    ["Paper Submission", "August 15, 2025"],
                    ["Acceptance Notification", "September 30, 2025"],
                    ["Camera-Ready Papers", "October 20, 2025"],
                    ["Early Bird Registration", "October 30, 2025"],
                    ["Final Registration", "November 15, 2025"],
                    ["Conference Dates", "December 4–5, 2025"]
                  ].map(([title, date], index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500 mb-1">{title}</p>
                        <p className="font-['Inter'] font-semibold text-gray-900">{date}</p>
                      </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration Fees Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="font-['Inter'] text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="h-8 w-1 bg-blue-600 rounded-full mr-4"></div>
                  Registration Fees
                </h2>
                <p className="text-gray-500 mb-6">(All fees are subject to 12% VAT)</p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                      <th className="px-6 py-4 text-left font-['Inter'] font-semibold">Category</th>
                      <th className="px-6 py-4 text-left font-['Inter'] font-semibold">Standard Fee</th>
                      <th className="px-6 py-4 text-left font-['Inter'] font-semibold">IEEE Members</th>
                      <th className="px-6 py-4 text-left font-['Inter'] font-semibold">With VAT</th>
                      <th className="px-6 py-4 text-left font-['Inter'] font-semibold">IEEE with VAT</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    {[
                      { category: "Academicians", standard: 100, discount: 80, final: 112, ieee: 89.6 },
                      { category: "Participants from Developed Countries", standard: 150, discount: 120, final: 168, ieee: 134.4 },
                      { category: "Ph.D. Scholars", standard: 80, discount: 64, final: 89.6, ieee: 71.68 },
                      { category: "Bachelor's / Master's Students", standard: 70, discount: 56, final: 78.4, ieee: 62.72 }
                    ].map((fee, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">{fee.category}</td>
                          <td className="px-6 py-4">${fee.standard}</td>
                          <td className="px-6 py-4">${fee.discount}</td>
                          <td className="px-6 py-4">${fee.final}</td>
                          <td className="px-6 py-4">${fee.ieee}</td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Registration Process Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="font-['Inter'] text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="h-8 w-1 bg-blue-600 rounded-full mr-4"></div>
                  Registration Process
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    ["01", "Fill Registration Form", "Complete the online registration form with your details"],
                    ["02", "Make Payment", "Process payment via credit card or bank transfer"],
                    ["03", "Upload Confirmation", "Submit your payment confirmation"],
                    ["04", "Get Confirmation", "Receive registration details via email"]
                  ].map(([step, title, desc]) => (
                      <div key={step} className="bg-gray-50 rounded-xl p-6">
                    <span className="inline-block bg-blue-100 text-blue-600 rounded-lg px-3 py-1 text-sm font-['Inter'] font-bold mb-3">
                      {step}
                    </span>
                        <h3 className="font-['Inter'] font-semibold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-500 text-sm">{desc}</p>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RegistrationPage;