import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMoviePerson } from "../utils/movieSlice";

const useMovieforPerson = (personId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!personId) return;
    fetchData(personId);
  }, [personId]);

  const fetchData = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`,
      API_OPTIONS
    );

    const data = await res.json();

    dispatch(addMoviePerson(data?.cast));
  };

  return null;
};

export default useMovieforPerson;
