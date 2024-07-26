export const checkvalidator = (email, Password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

  if (!isEmailValid) {
    return "EmailID is not valid";
  }
  if (!isPasswordValid) {
    return "Password not valid";
  }

  return null;
};
