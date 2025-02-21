import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const places = [
  {
    name: "Amir Temur Square",
    location: "Tashkent, Uzbekistan",
    image: "https://live.staticflickr.com/65535/52364998882_dd2c3f9098_b.jpg",
  },
  {
    name: "Registan Square",
    location: "Samarkand, Uzbekistan",
    image:
      "https://storage.googleapis.com/mari-a5cc7.appspot.com/photos/regular/75593ee9-7ca8-4f6e-8676-41b6a38960a4.jpg",
  },
  {
    name: "Ichan-Qal'a",
    location: "Khiva, Uzbekistan",
    image: "https://ychef.files.bbci.co.uk/1280x720/p0h8l984.jpg",
  },
  {
    name: "Amir Temur Mausoleum",
    location: "Samarkand, Uzbekistan",
    image:
      "https://www.advantour.com/img/uzbekistan/samarkand/gur-emir-mausoleum3.jpg",
  },
];

const TourPage = () => {
  return (
    <div>
      <div className="container max-w-full px-4 mx-auto">
        <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
          <div className="flex justify-center items-center flex-col w-full text-center">
            <h2 className="text-[26px] font-bold">TRAVEL</h2>
            <div>
              <Link className="text-[#334cf0] font-bold" to="/">
                HOME
              </Link>
              <span className="font-bold"> / TRAVEL</span>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-gray-100 py-10 px-4">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
            The most popular travel destinations in Uzbekistan
          </h1>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {places.map((place, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {place.name}
                  </h2>
                  <p className="text-gray-600 mt-1">📍 {place.location}</p>
                </div>
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1, backgroundPosition: "right center" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 w-40 mx-auto block text-white font-semibold rounded-full bg-gradient-to-r from-blue-900 to-black hover:from-black hover:to-blue-900
 transition-all duration-300 shadow-lg"
          >
            <Link to={"https://visittashkent.uz/en/"} target="_blank">Learn More</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
