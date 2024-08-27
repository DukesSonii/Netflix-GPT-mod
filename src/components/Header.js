// Header.js
import React, { useState, useEffect } from "react";
import oneimage from "../Images/netflix.png";
import { auth } from "../utils/FireBase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { changeLanguage } from "../utils/configSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleSearchView } from "../utils/gptSlice";
import { API_OPTIONS, SUPPORT_LANG } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearchVal = useSelector((store) => store.gpt.showGPTSearch);
  const currentLanguage = useSelector((store) => store.config.lang);

  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => {
      //when we call unsubscribe it will remove onAuthStateChanged from the browser
      unsubscribe();
    };
  }, []);

  const handleSearch = () => {
    if (searchVal.trim()) {
      setLoading(true);
      navigate(`/searchresults/${encodeURIComponent(searchVal)}`);
    }
  };

  const gptsearchclick = () => {
    dispatch(toggleSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="relative">
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between">
        <img
          className="w-48 cursor-pointer mx-auto md:mx-0"
          src={oneimage}
          alt="netflix-logo"
          onClick={() => navigate("/")}
        />
        {user && (
          <div className="flex justify-between p-4 gap-2 items-center">
            {showGptSearchVal && (
              <select
                className="bg-gray-900 text-white p-2 rounded-lg border border-gray-600 border-none"
                onChange={handleLanguageChange}
                value={currentLanguage}
              >
                {SUPPORT_LANG.map((lang) => (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}
                    className="bg-gray-700 text-white hover:bg-red-500"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            {!showGptSearchVal && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  placeholder={"Search for any Movies..."}
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="bg-black mr-3 text-white placeholder-gray-500 focus:ring-4 focus:ring-blue-400 rounded-lg px-4 py-2 border border-white"
                />
                <button
                  className="text-xs font-bold text-white focus:ring-2 focus:ring-blue-400 border border-white hover:bg-gray-800 rounded-lg mr-2 px-2 py-2 transition-all duration-300"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </form>
            )}
            <button
              className="-ml-8 md:ml-0 font-bold text-xs md:text-lg text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-blue-300 rounded-lg px-2 md:px-4 py-2 transition-all duration-300"
              onClick={gptsearchclick}
            >
              {showGptSearchVal ? "Home" : "GPT Search"}
            </button>
            <img
              className="hidden md:block w-12 h-12 rounded-full"
              src={user.photoURL}
              alt="UserIcon"
            />
            <button
              className="text-xs md:text-lg font-bold text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 rounded-lg px-2 md:px-4 py-2 transition-all duration-300"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
