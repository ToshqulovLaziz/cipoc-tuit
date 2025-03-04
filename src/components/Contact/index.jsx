const ContactUs = () => {
  return (
      <footer className="bg-white pt-12 pb-6 font-['Inter']">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-900 font-['Montserrat'] border-b-2 pb-2 border-b-blue-600">Contact Us</h2>

          <div className="flex justify-between gap-12 max-lg:flex-wrap text-base mt-4">
            <div className="w-full sm:w-1/3">
              <h3 className="font-['Montserrat'] font-bold text-lg mb-4 text-gray-800">Local Contact Person:</h3>
              <p className="font-medium mb-2">Dr. Rasulbek Otakhonov</p>
              <p className="text-gray-600 mb-1">Phone: +99 (899) 950-29-58</p>
              <p className="text-gray-600 mb-1">Office: +99 (871) 238-64-55</p>
              <p className="text-gray-600">Email: r.otakhanov@edu.uz</p>
            </div>

            <div className="w-full sm:w-1/3">
              <h3 className="font-['Montserrat'] font-bold text-lg mb-4 text-gray-800">Local venue contact details:</h3>
              <p className="font-medium mb-2">Block E, TUIT INCUBATION CENTER,</p>
              <p className="text-gray-600 mb-2">
                Tashkent University of Information Technologies named after
                Muhammad al-Khwarizmi (TUIT)
              </p>
              <p className="text-gray-600">
                108A, str. A.Temur, dist. Yunusabad,
                city Tashkent, Uzbekistan, 100084
              </p>
            </div>

            <div className="w-full sm:w-1/3">
              <h3 className="font-['Montserrat'] font-bold text-lg mb-4 text-gray-800">
                Organizing chair of OPTIMA:
              </h3>
              <p className="font-medium mb-2">Dr. Ahmed Yusupov</p>
              <p className="text-gray-600 mb-1">Phone: +998 99 866-45-06</p>
              <p className="text-gray-600 mb-1">Office: +998 71 238-65-87</p>
              <p className="text-gray-600">Email: a.yusupov@tuit.uz</p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t">
            <div className="flex justify-center space-x-6 text-gray-600 font-medium">
              <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-blue-600 transition-colors">Sitemap</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-blue-600 transition-colors">Scopus Preview</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-blue-600 transition-colors">OPTIMA 2025</a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default ContactUs;