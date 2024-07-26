import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidator } from "../utils/UseValidator";
const Login = () => {
  const [IsSignin, setIsSignin] = useState(true);
  const [errormessage, seterrormessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignin(!IsSignin);
  };

  const handelbuttonClick = () => {
    const message = checkvalidator(email.current.value, password.current.value);
    seterrormessage(message);

    if (message) return; //if error message was there then return from there

    //sign in sign up logic

    // if (!IsSignin) {
    //   //sign up logic
    //   createUserWithEmailAndPassword(
    //     auth,
    //     email.current.value,
    //     password.current.value
    //   )
    //     .then((userCredential) => {
    //       // Signed up
    //       const user = userCredential.user;
    //       console.log(user);
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       seterrormessage(errorCode + "-" + errorMessage);
    //     });
    // } else {
    //   //sign in logic
    // }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl py-4">
          {IsSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignin && (
          <input
            type="text"
            placeholder="Enter Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <p className="text-red-400 font-bold text-sm">{errormessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handelbuttonClick}
        >
          {IsSignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {IsSignin
            ? "New To Netflix? Sign Up Now"
            : "Already registered user? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
