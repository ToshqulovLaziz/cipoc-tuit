const RegistrationTable = () => {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">REGISTRATION</h2>
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
                Bachelor&apos;s / Master&apos;s Students
                </td>
                <td className="border border-gray-300 px-4 py-2">$70</td>
                <td className="border border-gray-300 px-4 py-2">$56</td>
                <td className="border border-gray-300 px-4 py-2">$78.40</td>
                <td className="border border-gray-300 px-4 py-2">$62.72</td>
              </tr>
            </tbody>
          </table>
          {/* <table className="min-w-full border border-gray-300 text-center text-gray-700">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  REGISTRATION TYPE AND FEES
                </th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm" colSpan={2}>
                  ONSITE PRESENTATION
                </th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm" colSpan={2}>
                  ONLINE PRESENTATION
                </th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  ADDITIONAL PAGES FEE
                </th>
              </tr>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm"></th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">EARLY BIRD</th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  ON DESK / LATE REGISTRATION
                </th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">EARLY BIRD</th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  LATE REGISTRATION
                </th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  EXTRA CHARGE PER PAGE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  ACADEMIC ATTENDEE
                </td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$600 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$700 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$250 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$300 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$50</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  STUDENT ATTENDEE
                </td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$400 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$500 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$250 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$300 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$50</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  GENERAL ATTENDEE
                </td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$700 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$800 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$300 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$400 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$75</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan={6}
                  className="border border-gray-300 px-4 py-2 text-red-600 font-semibold text-center text-xs sm:text-sm"
                >
                  50% DISCOUNT FOR ONSITE PARTICIPANTS FROM UZBEKISTAN
                </td>
              </tr>
            </tfoot>
          </table> */}
        </div>
      </div>
    );
  };
  
  export default RegistrationTable;
  