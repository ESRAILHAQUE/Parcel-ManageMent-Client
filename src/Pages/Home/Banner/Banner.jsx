import { FaSearch } from 'react-icons/fa';
import banner from '../../../assets/Banner/banner.png'
function Banner() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-4xl font-bold text-center my-6">
              Efficient Parcel Management with DelivTract
            </h1>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full p-3 pl-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500 shadow-sm transition duration-300"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner