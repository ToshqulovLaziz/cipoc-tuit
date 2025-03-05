import { Link } from "react-router-dom";
import FileConf from "../../assets/filesconf/ieee-format.pdf"

const PaperSubmissionpage = () => {
  return (
    <div className="container max-w-full px-4 mx-auto font-['Roboto']">
      <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
        <div className="flex justify-center items-center flex-col w-full text-center">
          <h2 className="text-[26px] font-bold">Paper Submission</h2>
          <div>
            <Link className="text-[#334cf0] font-bold" to="/">
              HOME
            </Link>
            <span className="font-bold"> / Paper Submission</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <a
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg tracking-wider font-semibold text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          href={FileConf}
          download
        >
          CONFERENCE TEMPLATE
        </a>

        <Link
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg tracking-wider font-semibold text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          to="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          SUBMIT
        </Link>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          INSTRUCTION TO AUTHORS
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Authors are invited to submit original, unpublished research papers
          for presentation at the International Conference on Optical
          Communication, Photonics, Telecommunications, and Intelligent Machine
          Applications (OPTIMA 2025).
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Submission Guidelines
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The International Conference on Optical Communication, Photonics,
          Telecommunications, and Intelligent Machine Applications (OPTIMA 2025)
          invites authors to submit original, high-quality research papers
          through the Microsoft CMT (Conference Management Toolkit) system.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Review Process
        </h2>
        <ul className="space-y-3">
          {[
            "Double-Blind Peer Review: Submissions will undergo a rigorous review process by at least two independent reviewers.",
            "Evaluation Criteria: Papers will be judged based on:",
            "Technical quality and originality",
            "Relevance to conference themes",
            "Clarity of presentation",
            "Experimental validation (if applicable)",
            "Plagiarism Policy: Papers must have less than 20% similarity index (checked via IEEE CrossCheck).",
          ].map((item, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Important Dates for OPTIMA 2025
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ["Paper Submission Deadline:", "August 15, 2025"],
            ["Notification of Acceptance:", "September 30, 2025"],
            ["Camera-Ready Paper Submission:", "October 20, 2025"],
            ["Early Bird Registration Deadline:", "October 30, 2025"],
            ["Final Registration Deadline:", "November 15, 2025"],
            ["Conference Dates:", "December 4–5, 2025"],
          ].map(([title, date], index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <span className="font-bold">{title}</span> {date}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Publication and Indexing
        </h2>
        <ul className="space-y-3">
          {[
            "Accepted papers will be published in IEEE Xplore and indexed in Scopus, Web of Science, and other major databases.",
            "At least one author must register and present the paper at the conference for inclusion in the proceedings.",
          ].map((item, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaperSubmissionpage;
