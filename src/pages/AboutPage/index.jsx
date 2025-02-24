import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container max-w-full px-4 mx-auto">
      <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
        <div className="flex justify-center items-center flex-col w-full text-center">
          <h2 className="text-[26px] font-bold">About OPTIMA 2025</h2>
          <div>
            <Link className="text-[#334cf0] font-bold" to="/">
              HOME
            </Link>
            <span className="font-bold"> / About OPTIMA</span>
          </div>
        </div>
      </div>
      
      <div className="container max-w-4xl mx-auto mt-6 p-">
        <h3 className="text-xl font-semibold mb-3">International Conference &quot;Optical Communication, Photonics, Telecommunications, and Intelligent Machine Applications - OPTIMA 2025&quot;</h3>
        <p>
        Scope of the Conference
        The International Conference on Optical Communication, Photonics, Telecommunications, and Intelligent Machine Applications (OPTIMA 2025) aims to bring together leading researchers, industry experts, and academics from around the world to explore the latest advancements, challenges, and innovations in next-generation communication, photonics, and intelligent systems.
        </p>
        
         {/* <h3 className="text-lg font-semibold mt-4">Scientific Direction & Goals</h3>
        <p>
          The conference focuses on information and communication technologies, photonics, optoelectronics, lasers, 
          silicon photonics, quantum communication, photovoltaics, and nanoelectronics.
        </p> */}
        
        <h3 className="text-lg font-semibold mt-4">Key Focus Areas:</h3>
        <ul className="list-disc pl-6">
          <li>Optical Communication & Networks – High-speed optical transmission, fiber-optic systems, and emerging network architectures.</li>
          <li>Photonics & Optoelectronics – Advancements in lasers, sensors, and photonic integrated circuits.</li>
          <li>Telecommunications & Wireless Systems – 5G/6G, satellite communications, and IoT connectivity.</li>
          <li>Artificial Intelligence & Machine Learning – AI-driven network optimization, intelligent signal processing, and deep learning for communication systems.</li>
          <li> IoT & Smart Technologies – Edge computing, autonomous systems, and AI-powered IoT applications.</li>
          <li> Quantum & Emerging Technologies – Quantum communication, nanophotonics, and futuristic computing paradigms.</li>
        </ul>
        <p>
        This conference serves as a global platform for knowledge exchange, fostering collaboration between academia, industry, and policymakers to shape the future of intelligent optical communication and emerging technologies.

Join us at OPTIMA 2025 to engage in cutting-edge discussions, technical sessions, and networking opportunities with pioneers driving innovation in the digital era.
        </p>
        {/* <h3 className="text-lg font-semibold mt-4">Legal Foundations</h3>
        <ul className="list-disc pl-6">
          <li>&quot;On approval of the concept of the development of science until 2030&quot; (Decree No. PF-6097, October 29, 2020).</li>
          <li>&quot;On the development strategy of a new Uzbekistan for 2022 - 2026&quot; (Decree No. PF-60, January 28, 2022).</li>
          <li>&quot;On approval of the Concept of Development of the Higher Education System until 2030&quot; (Decree No. PF-5847, October 8, 2019).</li>
        </ul> */}
        
        {/* <h3 className="text-lg font-semibold mt-4">Topics of Discussion</h3>
        <ul className="list-disc pl-6">
          <li>Photonics</li>
          <li>Optoelectronics</li>
          <li>Lasers</li>
          <li>Silicon Photonics</li>
          <li>Optical Communication</li>
          <li>Quantum Communication</li>
          <li>Photovoltaics</li>
          <li>Nanoelectronics</li>
        </ul>  */}
      </div>
    </div>
  );
};

export default AboutPage;
