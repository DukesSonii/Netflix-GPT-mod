import React, { useEffect } from "react";
import oneimage from "../Images/netflix.png";
import { auth } from "../utils/FireBase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addUser, removeUser } from "../utils/userSlice";
import { changeLanguage } from "../utils/configSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleSearchView } from "../utils/gptSlice";
import { SUPPORT_LANG } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearchVal = useSelector((store) => store.gpt.showGPTSearch);
  const currentLanguage = useSelector((store) => store.config.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user sign in
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
      unsubscribe();
    };
  }, []);

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
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className="w-48 cursor-pointer"
        src={oneimage}
        alt="netflix-logo"
        onClick={() => navigate("/")}
      />
      {user && (
        <div className="flex p-4 gap-2 items-center">
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

          <button
            className="font-bold text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-blue-300 rounded-lg px-4 py-2 transition-all duration-300"
            onClick={gptsearchclick}
          >
            {showGptSearchVal ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded-full"
            src={user.photoURL}
            alt="UserIcon"
          />

          <button
            className="font-bold text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 rounded-lg px-4 py-2 transition-all duration-300"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
