import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularCast } from "../utils/movieSlice";

const usePopularCast = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addPopularCast(data.results));
    setLoading(false);
  };

  return loading;
};

export default usePopularCast;
