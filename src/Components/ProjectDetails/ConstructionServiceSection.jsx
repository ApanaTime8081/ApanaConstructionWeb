import housesIllustration from "./housesIllustration.webp"; 

const ConstructionServiceSection = () => {
  return (
    <div className="bg-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Hire the best house construction service
          </h2>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            {/* 7000+ Homes */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-orange-500 text-xl">🏠</span>
              </div>
              <p className="text-gray-900">
                <span className="text-orange-500 font-bold">7000+ </span>
                Homes
              </p>
            </div>

            <div className=" border border-solid border-gray-200"></div>

            {/* 470+ Quality Checks */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-orange-500 text-xl">✔️</span>
              </div>
              <p className="text-gray-900">
                <span className="text-orange-500 font-bold">470+ </span>
                Quality Checks
              </p>
            </div>

            <div className=" border border-solid border-gray-200"></div>

            {/* 100% Safe Money Transaction */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-orange-500 text-xl">🛡️</span>
              </div>
              <p className="text-gray-900">
                <span className="text-orange-500 font-bold">100% </span>
                Safe Money Transaction
              </p>
            </div>
          </div>

          {/* Let's Build Button */}
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
            Let's Build
          </button>
        </div>

        {/* Right Section: Illustration */}
        <div className="lg:w-1/2 relative">
          <img
            src={housesIllustration}
            alt="Houses Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ConstructionServiceSection;
