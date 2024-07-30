import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayMovie = useSelector((store) => store?.movies?.nowPlayMovie);

  useEffect(() => {
    if (!nowPlayMovie) getNowPlayMovie();
  }, []);

  const getNowPlayMovie = async () => {
    //This code is just fetching teh data and just putting onto that store. Store is configured in appStore
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayMovies(json.results));
  };
};

export default useNowPlayingMovies;
