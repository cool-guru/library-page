const Card: React.FC = () => {
    return (
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c1.333 0 4 1.333 4 4s-2.667 4-4 4-4-1.333-4-4 2.667-4 4-4z"
              />
            </svg>
          </div>
  
          <div>
            <h3 className="text-md font-semibold text-gray-900">Item Name</h3>
            <p className="text-sm text-gray-500 mb-1">
              Short description of the item goes nicely here.
            </p>
            <p className="text-xs text-gray-400">06/27/2024</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
