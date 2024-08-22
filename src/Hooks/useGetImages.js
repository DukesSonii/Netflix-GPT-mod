import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addScreenshots } from "../utils/movieSlice";

const useGetImages = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/images`,
          API_OPTIONS
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        dispatch(addScreenshots(data));
      } catch (error) {
        console.error("Failed to fetch movie images:", error);
      }
    };

    fetchData();
  }, [movieId, dispatch]);
};

export default useGetImages;
