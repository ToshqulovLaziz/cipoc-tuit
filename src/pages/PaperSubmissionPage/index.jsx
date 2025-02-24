import { Link } from "react-router-dom";
const PaperSubmissionpage = () => {
  return (
    <div className="container max-w-4xl mx-auto pb-12 px-4">
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
      <p className="text-center text-lg text-gray-600 mt-4">
        Authors are invited to submit original, unpublished research papers for
        presentation at the International Conference on Optical Communication, Photonics, Telecommunications, and Intelligent Machine Applications (OPTIMA 2025).
      </p>

      <div className="mt-6 border-t pt-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Submission Guidelines
        </h2>
        <p>
        The International Conference on Optical Communication, Photonics, Telecommunications, and Intelligent Machine Applications (OPTIMA 2025) invites authors to submit original, high-quality research papers through the Microsoft CMT (Conference Management Toolkit) system.
        </p>
        {/* <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>
            Papers must be written in English and formatted according to the
            IEEE conference template.
          </li>
          <li>
            The maximum paper length is 6 pages, including figures, tables, and
            references.
          </li>
          <li>
            Submissions must be in PDF format and uploaded through the
            conference submission system.
          </li>
          <li>
            Authors should ensure that their submissions do not contain any form
            of plagiarism and comply with ethical publication standards.
          </li>
        </ul> */}
      </div>

      <div className="mt-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">
          Submission System
        </h2>
           <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
           <li>
           Submit your paper via Microsoft CMT:  [Insert Registration Link]:{" "}
            <a href="#" className="text-blue-600 underline">
              [Registration Link]
            </a>
          </li>
          <li>
          New Users: Authors must create a CMT account before submission.
          </li>
          <li>
          Existing Users: Log in to CMT, select OPTIMA 2025, and upload your paper.
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Review Process</h2>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>
          Double-Blind Peer Review: Submissions will undergo a rigorous review process by at least two independent reviewers.
          </li>
          <li>
          Evaluation Criteria: Papers will be judged based on:
          </li>
          <li>
          Technical quality and originality
          </li>
          <li>
          Relevance to conference themes
          </li>
          <li>
          Clarity of presentation
          </li>
          <li>
          Experimental validation (if applicable)
          </li>
          <li>
          Plagiarism Policy: Papers must have less than 20% similarity index (checked via IEEE CrossCheck).
          </li>
        </ul>
      </div>

      <div className="mt-8">
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
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Publication and Indexing
        </h2>
        <ul>
          <li>
          Accepted papers will be published in IEEE Xplore and indexed in Scopus, Web of Science, and other major databases.
          </li>
          <li>
          At least one author must register and present the paper at the conference for inclusion in the proceedings.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaperSubmissionpage;
