import React from "react";
import { useSelector } from "react-redux";

function Popularkeyords() {
  const keywords = useSelector((store) => store?.show?.keywords);
  console.log(keywords);

  return (
    <div className="flex text-white px-4">
      <p>
        <span className="text-gray-400">Keywords: </span>
        {keywords
          ?.slice(0, 11)
          ?.map((keyword) => keyword?.name)
          .join(", ")}
      </p>
    </div>
  );
}

export default Popularkeyords;
