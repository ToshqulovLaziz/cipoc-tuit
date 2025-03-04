import { Link } from "react-router-dom";

const CallForPapersPage = () => {
  return (
      <div className="container max-w-full px-4 mx-auto font-['Roboto']">
        <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
          <div className="flex justify-center items-center flex-col w-full text-center">
            <h2 className="text-[26px] font-bold">Call for Papers – OPTIMA 2025</h2>
            <div>
              <Link className="text-[#334cf0] font-bold" to="/">HOME</Link>
              <span className="font-bold"> / Call for Papers</span>
            </div>
          </div>
        </div>

        <div className="my-6">
          <div className="space-y-2 mb-8">
            <p className="text-gray-700">Date: 4-5 December 2025</p>
            <p className="text-gray-700">Venue: Tashkent, Uzbekistan</p>
            <p className="text-gray-700">Website: <Link to={"/"} className="text-blue-700">https://optima2025.tuit.uz</Link></p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Topics of Interest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Optical Communication & Photonics
              </h3>
              <ul className="space-y-3">
                {[
                  "High-Speed Optical Fiber Networks",
                  "Free-Space Optical Communication",
                  "Optical Wireless and Li-Fi Technologies",
                  "Photonic Integrated Circuits & Systems",
                  "Quantum Optics and Quantum Communication"
                ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Telecommunications & Networking
              </h3>
              <ul className="space-y-3">
                {[
                  "5G/6G and Beyond",
                  "Satellite and Space Communications",
                  "IoT-Enabled Wireless Networks",
                  "Network Slicing & Edge Computing",
                  "Software-Defined Networking (SDN)"
                ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Submission Guidelines</h2>
          <ul className="space-y-3">
            {[
              "Paper Length: Full papers (4-6 pages), including references and figures.",
              "Format: IEEE Conference Template (PDF & Word).",
              "Submission Link: [Insert Submission Portal]",
              "Peer Review: All submissions will undergo a double-blind peer review.",
              "Publication: Accepted papers will be included in IEEE Xplore and indexed in major databases."
            ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default CallForPapersPage;