import { hide } from "../assets/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { YouTube_Suggestion_Api } from "../assets/contant";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setQuery } from "../assets/searchSlice";

const Header = () => {
  const query = useSelector((state) => state.search.query); // ✅ bind input to Redux
  const [suggestionList, setSuggestionList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch suggestions
  useEffect(() => {
    if (!query) {
      setSuggestionList([]);
      return;
    }

    const timer = setTimeout(() => fetchSuggestions(), 200);
    return () => clearTimeout(timer);
  }, [query]);

  const fetchSuggestions = async () => {
    const res = await fetch(YouTube_Suggestion_Api + query);
    const data = await res.json();
    setSuggestionList(data[1]);
  };

  const hideSidebar = () => {
    dispatch(hide());
  };

  // ✅ Handle search button click
  const handleSearch = () => {
    if (!query.trim()) return;
    navigate("/video");
  };

  return (
    <div className="ml-5 mr-10 mt-3 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex gap-5 items-center">
        <span className="text-xl cursor-pointer" onClick={hideSidebar}>
          ☰
        </span>

        <Link to={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
            alt="logo"
            className="h-5 mt-1 cursor-pointer"
          />
        </Link>
      </div>

      {/* Search Box */}
      <div className="flex relative">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-400 h-10 w-130 rounded-l-full pl-4 placeholder:text-md placeholder:font-semibold outline-none"
            value={query} // ✅ controlled by Redux
            onChange={(e) => dispatch(setQuery(e.target.value))}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <div
            className="h-10 w-15 rounded-r-full border border-gray-400 cursor-pointer flex items-center justify-center bg-gray-100"
            onClick={handleSearch}
          >
            <img
              src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
              alt="search"
              className="h-6"
            />
          </div>
        </div>

        {/* Suggestions */}
        {showSuggestion && suggestionList.length > 0 && (
          <div className="absolute top-12 bg-white w-130 pt-5 rounded-lg space-y-2 py-4 shadow-md">
            {suggestionList.map((data, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-lg hover:bg-gray-100 h-9 px-4 cursor-pointer"
                onMouseDown={() => {
                  dispatch(setQuery(data)); 
                  navigate("/video");        
                }}
              >
                <img
                  src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
                  alt="search-icon"
                  className="h-4"
                />
                <p>{data}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center gap-7">
        <div className="flex items-center justify-center gap-1 h-10 w-25 rounded-full hover:bg-gray-200 cursor-pointer bg-gray-100">
          <p className="text-4xl font-light mb-2">+</p>
          <span className="font-semibold pr-2">Create</span>
        </div>
        <span className="text-2xl cursor-pointer">🔔︎</span>
        <div className="size-10 bg-gray-200 rounded-full cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
            alt="profile"
            className="object-cover h-full w-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;