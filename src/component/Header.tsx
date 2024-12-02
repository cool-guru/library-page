import React from "react";

const Header: React.FC = () => {
  return (
    <header className="relative mb-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Library</h1>
        <p className="text-gray-600">
          Browse for assets needed to report and present analysis.
        </p>
      </div>

      <button className="absolute top-0 right-0 flex items-center gap-2 px-3 py-2 bg-gray-700 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-800 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Request
      </button>
    </header>
  );
};

export default Header;
