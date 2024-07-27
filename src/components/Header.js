import React, { useEffect } from "react";
import oneimage from "../Images/netflix.png";
import { auth } from "../utils/FireBase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addUser, removeUser } from "../utils/userSlice";

import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-48" src={oneimage} alt="netflix-logo" />
      {user && (
        <div className="flex p-4">
          <img className="w-12 h-12 " src={user.photoURL} alt="UserIcon" />

          <button className="font-bold text-white " onClick={handleSignOut}>
            {" "}
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
