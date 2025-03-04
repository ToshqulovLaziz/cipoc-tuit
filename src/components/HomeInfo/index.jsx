const HomeInfo = () => {
    return (
        <div className="container max-w-6xl mx-auto pb-16 px-4">
            <div className="space-y-4 text-center">
                <h1 className="font-['Inter'] text-4xl md:text-3xl font-extrabold text-gray-900 leading-tight bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent">
                    International Conference on Optical Communication, Photonics, Telecommunications, and Intelligent Machine Applications
                </h1>
            </div>

            <div className="mt-12 space-y-6">
                <p className="font-['Inter'] text-lg text-gray-700 leading-relaxed">
                    The IEEE International Conference on Photonics, Artificial Intelligence, and Optical Communications (OPTIMA) will be held on <span className="font-semibold text-green-500">December 4–5, 2025</span> in <span className="font-semibold text-green-500">Tashkent</span>. This prestigious event will cover a wide range of technical topics, including plenary sessions, invited talks, and panel discussions.
                </p>
                <p className="font-['Inter'] text-lg text-gray-700 leading-relaxed">
                    Researchers, academics, and industry professionals are invited to join and explore the latest advancements and emerging trends in photonics, artificial intelligence, and optical communication technologies.
                </p>
            </div>

            <div className="mt-16">
                <h2 className="font-['Inter'] text-3xl font-bold text-gray-900 flex items-center">
                    <div className="h-8 w-1 bg-blue-600 rounded-full mr-4"></div>
                    About the Conference
                </h2>
                <p className="font-['Inter'] text-lg text-gray-700 mt-6">
                    OPTIMA 2025 provides a global platform for knowledge exchange, networking, and collaboration among scientists, engineers, and innovators. The conference will feature:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {[
                        "Optical communication systems and networks",
                        "Photonic devices and integrated circuits",
                        "AI applications in optical communications",
                        "Quantum photonics and computing",
                        "Emerging trends in fiber-optic technologies"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl">
                            <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                            <p className="font-['Inter'] text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <h2 className="font-['Inter'] text-3xl font-bold text-gray-900 flex items-center">
                    <div className="h-8 w-1 bg-blue-600 rounded-full mr-4"></div>
                    Key Details
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {[
                        { icon: "📅", title: "Date", content: "4-5 December 2025" },
                        { icon: "📍", title: "Location", content: "Tashkent, Uzbekistan" },
                        { icon: "🔹", title: "Format", content: "Hybrid (In-person & Virtual)" },
                        { icon: "📌", title: "Submission Deadline", content: "August 15, 2025" }
                    ].map((item, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors duration-300">
                            <div className="text-2xl mb-3">{item.icon}</div>
                            <p className="font-['Inter'] font-bold text-gray-900 mb-2">{item.title}</p>
                            <p className="font-['Inter'] text-gray-600">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeInfo;