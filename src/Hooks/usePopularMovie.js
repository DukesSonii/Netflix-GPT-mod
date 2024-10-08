import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const popularMovie = useSelector((store) => store?.movies?.popularMovie);
  useEffect(() => {
    if (!popularMovie) getPopularMovie();
  }, []);

  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };
};

export default usePopularMovie;
