import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ prod }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer border-2 border-black p-2 rounded-lg grow gap-1"
      onClick={() => navigate(`/${prod.id}`)}
    >
      <img
        src={prod.thumbnailUrl}
        width="120px"
        height="120px"
        alt="prod"
        className="prod-img rounded-lg"
      />
      <div className="prod-txt">
        {prod.title.length > 20 ? prod.title.slice(0, 20) : prod.title}...
      </div>
      <span>Rs.{prod.title.length * 10}</span>
    </div>
  );
};
