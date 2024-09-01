import React from "react";
import { useSelector } from "react-redux";
import SeriesBackground from "./Seriesbackground";
import SeriesTitle from "./SeriesTitle";
const SeriesContainer = () => {
  const series = useSelector((store) => store.show?.trendingShows);

  if (!series) return;

  const mainseries = series[0];

  const { original_name, overview, id } = mainseries;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <SeriesTitle title={original_name} overview={overview} />
      <SeriesBackground seriesId={id} />
    </div>
  );
};

export default SeriesContainer;
