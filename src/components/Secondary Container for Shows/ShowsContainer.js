import React from "react";
import { useSelector } from "react-redux";
import ShowsList from "./ShowsList";
const ShowsContainer = () => {
  const shows = useSelector((store) => store.show);
  console.log(shows);

  return (
    <div className="bg-black pl-4">
      <ShowsList title={"Trending TV Shows"} shows={shows.trendingShows} />
      <ShowsList title={"Airing Today Shows"} shows={shows.todayShows} />
      <ShowsList title={"Upcoming Shows"} shows={shows.upcomingShows} />
      <ShowsList title={"Popular Shows"} shows={shows.popularShows} />
    </div>
  );
};

export default ShowsContainer;
