import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="relative">
        <Link to="/products">
          <img
            src="../assets/asianPaints.jpg"
            alt=""
            className="w-full home-img cursor-pointer"
          />
          <button className="absolute top-0 font-extrabold rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};
