import { CDN_URL } from "../utills/constants";

const ReasturantCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, areaName, costForTwo } =
    resData;
  return (
    <div className="card">
      <img
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="img"
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};


export default ReasturantCards;