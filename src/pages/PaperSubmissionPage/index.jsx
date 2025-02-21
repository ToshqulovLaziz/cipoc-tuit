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
        presentation at the International Conference on Photonics, AI, and
        Optical Communications (PAIOC 2025).
      </p>

      <div className="mt-6 border-t pt-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Submission Guidelines
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
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
        </ul>
      </div>

      <div className="mt-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">
          Submission System
        </h2>
        <p className="text-gray-700 text-lg mt-4">
          All papers should be submitted via the EasyChair platform. The
          submission link will be available on the conference website.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Review Process</h2>
        <p className="text-gray-700 text-lg mt-4">
          Each paper will be double-blind peer-reviewed by at least two
          independent reviewers. Acceptance will be based on originality,
          technical quality, clarity, and relevance to the conference themes.
          The review process is strictly anonymous; therefore, authors must
          remove personal details from the manuscript.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Important Dates
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-lg font-medium text-gray-800">
              📌 Paper Submission Deadline:
            </p>
            <p className="text-gray-700">15 August 2025</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-lg font-medium text-gray-800">
              📢 Notification of Acceptance:
            </p>
            <p className="text-gray-700">30 September 2025</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-lg font-medium text-gray-800">
              📅 Conference Dates:
            </p>
            <p className="text-gray-700">4-5 December 2025</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Publication and Indexing
        </h2>
        <p className="text-gray-700 text-lg mt-4">
          Accepted and presented papers will be published in the IEEE Xplore
          Digital Library and indexed in Scopus and Web of Science.
        </p>
      </div>
    </div>
  );
};

export default PaperSubmissionpage;
