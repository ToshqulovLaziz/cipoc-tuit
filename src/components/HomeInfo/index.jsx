const HomeInfo = () => {
  return (
    <div className="container max-w-4xl mx-auto pb-10 px-">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">International Conference on Photonics, AI, and Optical Communications</h1>
      <p className="text-center text-lg text-gray-600 mt-4">Welcome to PAIOC 2025!</p>
      
      <div className="mt-6 border-t pt-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          The IEEE International Conference on Photonics, Artificial Intelligence, and Optical Communications (PAIOC) will be held on <strong>December 4–5, 2025</strong> in <strong>Tashkent</strong>. This prestigious event will cover a wide range of technical topics, including plenary sessions, invited talks, and panel discussions.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Researchers, academics, and industry professionals are invited to join and explore the latest advancements and emerging trends in photonics, artificial intelligence, and optical communication technologies.
        </p>
      </div>
      
      <div className="mt-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">About the Conference</h2>
        <p className="text-gray-700 text-lg mt-4">
          PAIOC 2025 provides a global platform for knowledge exchange, networking, and collaboration among scientists, engineers, and innovators. The conference will feature:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>Optical communication systems and networks</li>
          <li>Photonic devices and integrated circuits</li>
          <li>AI applications in optical communications</li>
          <li>Quantum photonics and computing</li>
          <li>Emerging trends in fiber-optic technologies</li>
        </ul>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Key Details</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-lg font-medium text-gray-800">📅 Date:</p>
            <p className="text-gray-700">4-5 December 2025</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-lg font-medium text-gray-800">📍 Location:</p>
            <p className="text-gray-700">Tashkent, Uzbekistan</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-lg font-medium text-gray-800">🔹 Format:</p>
            <p className="text-gray-700">Hybrid (In-person & Virtual)</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-lg font-medium text-gray-800">📌 Submission Deadline:</p>
            <p className="text-gray-700">[To be announced]</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-800">For more details, contact us at:</p>
        <a href="mailto:contact@paioc2025.org" className="text-blue-600 font-semibold hover:underline">contact@paioc2025.org</a>
      </div>
    </div>
  );
};

export default HomeInfo;