import ReasturantCards from "./ResturantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.846693699999996&lng=80.94616599999998&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFiltered(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
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

        <div className="search-box">
          <input
            type="text"
            className="search-btn"
            placeholder="Search Here..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search"
            onClick={() => {
              // filter the resturant card and update the UI;
              const resObjs = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFiltered(resObjs);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="resturent-list">
        {filtered.map((res) => (
          <ReasturantCards resData={res.info} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
