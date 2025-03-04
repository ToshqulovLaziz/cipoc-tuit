import { Link } from "react-router-dom";
import { FaSatelliteDish, FaMicrochip, FaBrain, FaCloud, FaSignal, FaLock, FaCogs } from "react-icons/fa";
import { GiArtificialIntelligence, GiCircuitry } from "react-icons/gi";
import { BsGlobe2, BsShieldLock, BsHddRackFill } from "react-icons/bs";
import { MdNetworkCheck, MdPhonelink, MdSensors } from "react-icons/md";
import { TbWaveSine } from "react-icons/tb";
import { RiEarthLine } from "react-icons/ri";

const AboutPage = () => {
  const keyFocusAreas = [
    { icon: <FaSatelliteDish />, text: "Optical Communication & Networks – High-speed optical transmission, fiber-optic systems, optical amplifiers, emerging network architectures and software-defined optical networks" },
    { icon: <MdSensors />, text: "Photonics & Optoelectronics – Advancements in lasers, sensors, photonic integrated circuits (PICs), Silicon photonics, quantum photonics, and next-gen optical devices" },
    { icon: <FaSignal />, text: "Telecommunications & Wireless Systems – 5G/6G networks, mmWave, terahertz communication, Satellite communications, massive MIMO, beamforming, IoT connectivity" },
    { icon: <RiEarthLine />, text: "Ubiquitous Communication & Future Networks – Seamless global connectivity, next-gen mobile networks, Device-to-device (D2D) communication, pervasive and ubiquitous networking" },
    { icon: <GiArtificialIntelligence />, text: "AI & Machine Learning in Communication – AI-driven network optimization, deep learning for signal processing, Federated learning, self-optimizing networks, and cognitive radio" },
    { icon: <MdPhonelink />, text: "IoT & Smart Technologies – Edge computing, industrial IoT, smart cities, AI-powered IoT applications, sensor networks, and autonomous systems" },
    { icon: <GiCircuitry />, text: "Quantum & Emerging Technologies – Quantum communication, cryptography, and computing paradigms, Nanophotonics, quantum networking, and quantum key distribution (QKD)" },
    { icon: <BsGlobe2 />, text: "Antenna Design & RF Technologies – Reconfigurable antennas, metamaterials, ultra-wideband systems, Electromagnetic compatibility (EMC) and spectrum management" },
    { icon: <TbWaveSine />, text: "Signal Processing & Data Analytics – Adaptive filtering, computational intelligence, real-time signal processing. Big data analytics in communication networks" },
    { icon: <FaLock />, text: "Cybersecurity & Network Security – Secure communication protocols, cryptographic techniques, Blockchain for secure data exchange, privacy-preserving AI" },
    { icon: <FaSatelliteDish />, text: "Space & Satellite Technologies – Next-gen satellite systems, inter-satellite communication, CubeSats, Deep-space communication and high-altitude platform stations (HAPS)" },
    { icon: <FaMicrochip />, text: "Embedded & VLSI Systems – Low-power design, neuromorphic computing, Embedded AI for real-time applications" },
    { icon: <FaCloud />, text: "Green ICT & Sustainable Communication – Energy-efficient networks, green wireless systems, Sustainable computing architectures" },
    { icon: <FaBrain />, text: "Human-Computer Interaction & Brain-Computer Interfaces – Neurotechnology, wearable devices, assistive communication systems" },
  ];

  return (
      <div>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
            <div className="flex justify-center items-center flex-col w-full text-center">
              <h2 className="text-[26px] font-bold">ABOUT</h2>
              <div>
                <Link className="text-[#334cf0] font-bold" to="/">
                  HOME
                </Link>
                <span className="font-bold"> / ABOUT OPTIMA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-4xl mx-auto px-4 mt-6 relative z-10 pb-16">
          <div className="mb-8">
            <h3 className="font-['Inter'] text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              International Conference OPTIMA 2025
            </h3>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-['Inter'] text-xl font-bold text-gray-900 mb-4">Scope of the Conference</h4>
                <p className="font-['Inter'] text-gray-700 leading-relaxed">
                  The International Conference on Optical Communication, Photonics, Telecommunications, and Intelligent
                  Machine Applications (OPTIMA 2025) aims to bring together leading researchers, industry experts, and
                  academics from around the world to explore the latest advancements, challenges, and innovations in
                  next-generation communication, photonics, and intelligent systems.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-['Inter'] text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="h-8 w-1 bg-blue-600 rounded-full mr-4"></div>
                  Key Focus Areas
                </h3>
                <div className="grid gap-4">
                  {keyFocusAreas.map((item, index) => (
                      <div key={index} className="flex items-start p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300">
                        <span className="text-blue-600 text-2xl mr-4 mt-1">{item.icon}</span>
                        <span className="font-['Inter'] text-gray-700">{item.text}</span>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8">
            <p className="font-['Inter'] text-gray-700 leading-relaxed mb-4">
              This conference serves as a global platform for knowledge exchange, fostering collaboration between
              academia, industry, and policymakers to shape the future of intelligent optical communication and emerging
              technologies.
            </p>
            <p className="font-['Inter'] text-gray-700 leading-relaxed">
              Join us at OPTIMA 2025 to engage in cutting-edge discussions, technical sessions, and networking
              opportunities with pioneers driving innovation in the digital era.
            </p>
          </div>
        </div>
      </div>
  );
};

export default AboutPage;