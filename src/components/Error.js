import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops❗</h1>
      <h2>Something went wrong❗</h2>
      <h3>
        {err ? `${err.status}: ${err.statusText}` : "Unknown error occurred"}
      </h3>
    </div>
  );
};

export default Error;
