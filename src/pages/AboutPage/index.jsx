import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container max-w-full px-4 mx-auto pt-4">
      <div className="flex justify-between">
        <h2 className="text-[26px] text-[#2a3aa6] font-bold">About CIPOC</h2>
        <Link
          className="border-2 py-2 px-3 border-[#334cf0] font-bold rounded-lg"
          to="/"
        >
          Back to home
        </Link>
      </div>
      <div className="max-w-6xl mx-auto p-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Digitalization of Cinematography, Television, and Government
          Authorities: Current Issues and Solutions
        </h2>
        <p className="text-gray-700 text-center mb-4">
          Organized by Muhammad al-Khwarizmi Tashkent University of Information
          Technologies
        </p>
        <div className="flex flex-col items-center text-gray-600">
          <p className="mb-2">
            <strong>Date:</strong> May 30, 2025 - May 31, 2025
          </p>
          <p className="mb-2">
            <strong>Location:</strong> Yunusabad District, Tashkent City
          </p>
          <p className="mb-2">
            <strong>Organizers:</strong> Faculty of Information Security,
            Digital Media Department
          </p>
          <p className="mb-2">
            <strong>Purpose:</strong> Discussing current challenges and
            solutions in digitalization of media and government sectors.
          </p>
          <p className="mb-2">
            <strong>Participants:</strong> Researchers, industry experts,
            government representatives, students.
          </p>
          <p className="mb-2">
            <strong>Contact:</strong> info@tuit.uz | +998 71 123 45 67
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
