import React from "react";

export default function AboutSection() {
  const imageClass = "w-24 h-24 rounded-xl object-cover shadow-lg";

  return (
    <div
      className=" text-white flex items-center justify-center px-6 pt-22"
      id="about-section"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] mx-auto">
          {/* 4 Corner Images */}
          <img
            src="https://themewagon.github.io/stylish/images/card-item7.jpg"
            alt="A"
            className={`${imageClass} absolute top-5 left-5 md:w-35 md:h-35`}
          />
          <img
            src="https://themewagon.github.io/stylish/images/card-image1.jpg"
            alt="B"
            className={`${imageClass} absolute top-1 right-0 md:w-35 md:h-35`}
          />
          <img
            src="https://themewagon.github.io/stylish/images/card-item10.jpg"
            alt="C"
            className={`${imageClass} absolute bottom-1 left-0 md:w-35 md:h-35`}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh50TAPkXI7K6tQ1JnPLfp1QpIAqDnMMTg7Q&s"
            alt="D"
            className={`${imageClass} absolute bottom-5 right-5 md:w-35 md:h-35`}
          />

          {/* Center Circular Image */}
          <img
            src="https://themewagon.github.io/stylish/images/card-item3.jpg"
            alt="Center"
            className="w-40 h-40 rounded-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl border-4 border-white"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">
            About Shoes
          </h2>
          <p className="text-white mb-6 leading-relaxed">
            Discover the Shoez story. We're passionate about creating footwear
            that not only complements your style but also prioritizes comfort
            and quality.
          </p>
          <a href="#shopping-section">
            <button className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:text-white transition">
              View Our Products
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
