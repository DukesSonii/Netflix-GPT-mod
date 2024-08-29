import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShowsList from "./ShowsList";
import useShowsTrailer from "../../Hooks/Hooks for Shows/useShowsTrailer";
import ModalShows from "./ShowsModal/ModalShows";
import useDetailsforShow from "../../Hooks/Hooks for Shows/useDetailsforShow";
import useCastforShows from "../../Hooks/Hooks for Shows/useCastforShows";
import useSimilarShows from "../../Hooks/Hooks for Shows/useSimilarShows";
const ShowsContainer = () => {
  const shows = useSelector((store) => store.show);
  const [isvisible, setisvisible] = useState(false);
  const [selectedShow, setselectedShow] = useState(null);
  const trailerVideo = useSelector((store) => store?.show?.showTrailer);
  const basicdetails = useSelector((store) => store?.show?.showDetails);

  const showcast = useSelector((store) => store?.show?.cast);

  const handleOk = () => {
    setisvisible(false);
  };

  const showModal = (show) => {
    setselectedShow(show);
    setisvisible(true);
  };

  const handleCancel = () => {
    setisvisible(false);
  };

  useShowsTrailer(selectedShow?.id);
  useDetailsforShow(selectedShow?.id);
  useCastforShows(selectedShow?.id);
  useSimilarShows(selectedShow?.id);

  return (
    <div className="bg-black pl-4 mt-6">
      <div className="relative mt-0 md:-mt-56 z-20 pl-1 md:pl-6">
        <ShowsList
          title={"Trending TV Shows"}
          shows={shows.trendingShows}
          onPosterClick={showModal}
        />
        <ShowsList
          title={"Airing Today Shows"}
          shows={shows.todayShows}
          onPosterClick={showModal}
        />
        <ShowsList
          title={"Upcoming Shows"}
          shows={shows.upcomingShows}
          onPosterClick={showModal}
        />
        <ShowsList
          title={"Popular Shows"}
          shows={shows.popularShows}
          onPosterClick={showModal}
        />
        <ModalShows
          isVisible={isvisible}
          trailerVideo={trailerVideo}
          onOk={handleOk}
          onCancel={handleCancel}
          selectedShow={selectedShow}
          basicdetails={basicdetails}
          showcast={showcast}
          onPosterClick={showModal}
        />
      </div>
    </div>
  );
};

export default ShowsContainer;
