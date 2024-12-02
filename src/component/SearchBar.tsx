const SearchBar: React.FC = () => {
    return (
      <div className="w-full mb-8">
        <input
          type="text"
          placeholder="Type to search..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default SearchBar;