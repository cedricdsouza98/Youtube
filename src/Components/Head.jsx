import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { Link } from "react-router";

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => clearTimeout(timer);
  }, [search]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + search);
    console.log(data);

    const json = await data.json();
    setSuggestions(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 col-span-1 cursor-pointer"
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
          alt="menu"
        />

        <img
          className="h-8 mx-2"
          src="data:image/png;base64,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"
          alt="logo"
        />
      </div>
      <div className="col-span-10 px-10 text-center">
        <div>
          <input
            type="text"
            className="w-[37rem] border border-black p-2 rounded-l-full"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-box">
            <ul>
              {suggestions.map((s) => (
                <li className="py-2 shadow-sm hover:bg-gray-100 ">{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8 "
          src="data:image/png;base64,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"
          alt="user-icon"
        />
      </div>
    </div>
  );
};
export default Head;
