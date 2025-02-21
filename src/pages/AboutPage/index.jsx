import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container max-w-full px-4 mx-auto">
      <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
        <div className="flex justify-center items-center flex-col w-full text-center">
          <h2 className="text-[26px] font-bold">About AIFOK 2025</h2>
          <div>
            <Link className="text-[#334cf0] font-bold" to="/">
              HOME
            </Link>
            <span className="font-bold"> / About AIFOK</span>
          </div>
        </div>
      </div>
      
      <div className="container max-w-4xl mx-auto mt-6 p-">
        <h3 className="text-xl font-semibold mb-3">International Conference &quot;Actual Problems of Photonics and Optical Communications - AIFOK 2025&quot;</h3>
        <p>
          AIFOK 2025 serves as a platform for discussing new scientific results in photonics and optical communications, 
          exchanging innovative ideas, and demonstrating research outcomes with practical implementation.
        </p>
        
        <h3 className="text-lg font-semibold mt-4">Scientific Direction & Goals</h3>
        <p>
          The conference focuses on information and communication technologies, photonics, optoelectronics, lasers, 
          silicon photonics, quantum communication, photovoltaics, and nanoelectronics.
        </p>
        
        <h3 className="text-lg font-semibold mt-4">Conference Objectives</h3>
        <ul className="list-disc pl-6">
          <li>Analyze research trends in photonics and optical communications worldwide.</li>
          <li>Study and implement innovative technologies in the field.</li>
          <li>Identify priority research areas and practical applications.</li>
          <li>Support the creation of competitive, import-substituting developments.</li>
          <li>Enhance the professional skills of educators and researchers.</li>
        </ul>
        
        <h3 className="text-lg font-semibold mt-4">Legal Foundations</h3>
        <ul className="list-disc pl-6">
          <li>&quot;On approval of the concept of the development of science until 2030&quot; (Decree No. PF-6097, October 29, 2020).</li>
          <li>&quot;On the development strategy of a new Uzbekistan for 2022 - 2026&quot; (Decree No. PF-60, January 28, 2022).</li>
          <li>&quot;On approval of the Concept of Development of the Higher Education System until 2030&quot; (Decree No. PF-5847, October 8, 2019).</li>
        </ul>
        
        <h3 className="text-lg font-semibold mt-4">Topics of Discussion</h3>
        <ul className="list-disc pl-6">
          <li>Photonics</li>
          <li>Optoelectronics</li>
          <li>Lasers</li>
          <li>Silicon Photonics</li>
          <li>Optical Communication</li>
          <li>Quantum Communication</li>
          <li>Photovoltaics</li>
          <li>Nanoelectronics</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
