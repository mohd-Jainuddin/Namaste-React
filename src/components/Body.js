import ReasturantCards from "./ResturantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.846693699999996&lng=80.94616599999998&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setResList(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const resObjs = resList.filter((res) => res.info.avgRating >= 4);
            setResList(resObjs);
          }}
        >
          Top Rated Rasturant
        </button>
      </div>
      <div className="resturent-list">
        {resList.map((res) => (
          <ReasturantCards resData={res.info} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
