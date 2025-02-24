import { Link } from "react-router-dom";
const CallForPapersPage = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 pb-10">
      <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
        <div className="flex justify-center items-center flex-col w-full text-center">
          <h2 className="text-[26px] font-bold">
            Call for Papers – OPTIMA 2025
          </h2>
          <div>
            <Link className="text-[#334cf0] font-bold" to="/">
              HOME
            </Link>
            <span className="font-bold"> / Call for Papers</span>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <p className=" text-gray-600 mt-2">Date: [Insert Conference Date]</p>
        <p className=" text-gray-600">Venue: [Insert Conference Venue]</p>
        <p className=" text-gray-600">Website: [Insert Conference Website]</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Topics of Interest
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600">
                Optical Communication & Photonics
              </h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>High-Speed Optical Fiber Networks</li>
                <li>Free-Space Optical Communication</li>
                <li>Optical Wireless and Li-Fi Technologies</li>
                <li>Photonic Integrated Circuits & Systems</li>
                <li>Quantum Optics and Quantum Communication</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-600">
                Telecommunications & Networking
              </h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>5G/6G and Beyond</li>
                <li>Satellite and Space Communications</li>
                <li>IoT-Enabled Wireless Networks</li>
                <li>Network Slicing & Edge Computing</li>
                <li>Software-Defined Networking (SDN)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Submission Guidelines
          </h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>
              Paper Length: Full papers (4-6 pages), including references and
              figures.
            </li>
            <li>Format: IEEE Conference Template (PDF & Word).</li>
            <li>Submission Link: [Insert Submission Portal]</li>
            <li>
              Peer Review: All submissions will undergo a double-blind peer
              review.
            </li>
            <li>
              Publication: Accepted papers will be included in IEEE Xplore and
              indexed in major databases.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CallForPapersPage;
