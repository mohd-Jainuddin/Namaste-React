import React from "react";
import ReactDOM from "react-dom/client";

// JSX--HTML like or XML like syntax but not HTML.

// Api

const resObj = [
  {
    id: "74901",
    name: "Shri Ganpati Sweets & Restaurant",
    cloudinaryImageId: "rfpfbgnw7qjiggcy4epk",
    locality: "Raebareli Road",
    areaName: "Aashiana",
    costForTwo: "₹300 for two",
    cuisines: ["North Indian", "South Indian", "Chinese"],
    avgRating: 4.1,
  },
  {
    id: "66671",
    name: "Mr. Brown- DANBRO",
    cloudinaryImageId: "2c469b5d88f84b7495b9825d06e4bb9b",
    locality: "Hazratganj",
    areaName: "Hazratganj",
    costForTwo: "₹150 for two",
    cuisines: [
      "Bakery",
      "Italian",
      "Snacks",
      "Pizzas",
      "Healthy Food",
      "Beverages",
    ],
    avgRating: 4.4,
  },
  {
    id: "59654",
    name: "Subway",
    cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
    locality: "Sapru Marg",
    areaName: "Hazratganj",
    costForTwo: "₹350 for two",
    cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 4.1,
  },
  {
    id: "133782",
    name: "Cafe Coffee Day",
    cloudinaryImageId: "nber2vixmlbl3dekqoh1",
    locality: "MG Marg",
    areaName: "Hazratganj",
    costForTwo: "₹300 for two",
    cuisines: ["Beverages", "Snacks", "Desserts"],
    avgRating: 4.1,
  },
  {
    id: "59530",
    name: "The Cherry Tree Bakery & Cafe",
    cloudinaryImageId: "8b396b7aca4b55e53c647e68c2b95a93",
    locality: "Habibullah Estate Road",
    areaName: "Hazratganj",
    costForTwo: "₹250 for two",
    cuisines: ["Bakery", "Pastas", "Pizzas", "Continental", "Snacks"],
    avgRating: 4.3,
  },
  {
    id: "229723",
    name: "Faasos - Wraps & Rolls",
    cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
    locality: "Habibulla Estate Road",
    areaName: "Hazratganj",
    costForTwo: "₹200 for two",
    cuisines: [
      "Kebabs",
      "Fast Food",
      "Snacks",
      "North Indian",
      "American",
      "Healthy Food",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.1,
  },
  {
    id: "89361",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "dek7ifvgfbnddngpqn4r",
    locality: "Sapru Marg",
    areaName: "Hazratganj",
    costForTwo: "₹250 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 3.9,
  },
  {
    id: "229730",
    name: "LunchBox - Meals and Thalis",
    cloudinaryImageId: "rzpfumdzzpxqawsxckqp",
    locality: "Habibulla Estate Road",
    areaName: "Hazratganj",
    costForTwo: "₹200 for two",
    cuisines: [
      "Biryani",
      "North Indian",
      "Punjabi",
      "Healthy Food",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.1,
  },
  {
    id: "229727",
    name: "Sweet Truth - Cake and Desserts",
    cloudinaryImageId: "3ec8bccd0fc2c6303d7602dd642248d5",
    locality: "Habibulla Estate Road",
    areaName: "Hazratganj",
    costForTwo: "₹450 for two",
    cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
    avgRating: 4.3,
  },
  {
    id: "70646",
    name: "Chhappan Bhog",
    cloudinaryImageId: "bn39lysdyyxl8hkeripl",
    areaName: "Sadar Bazaar",
    costForTwo: "₹200 for two",
    cuisines: ["Sweets", "Snacks"],
    avgRating: 4.6,
  },
];

const Title = () => (
  <a href="/">
    <img
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w256-rw"
      className="logo"
      alt="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="resturent-list">
      {resObj.map((res) => (
        <ReasturantCards resData={res} key={res.id} />
      ))}
    </div>
  );
};

const Footer = () => {
  return <h3>Footer</h3>;
};

const ReasturantCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, areaName, costForTwo } =
    resData;
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
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

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
