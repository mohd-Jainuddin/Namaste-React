import ReasturantCards from "./ResturantCards";
import resObj from "../utills/mockData";
import { useState } from "react";

const Body = () => {
  const [resList,setResList] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const resObjs = resObj.filter((res) => res.avgRating > 4.3);
            setResList(resObjs);
          }}
        >
          Top Rated Rasturant
        </button>
      </div>
      <div className="resturent-list">
        {resList.map((res) => (
          <ReasturantCards resData={res} key={res.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
