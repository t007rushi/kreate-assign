import React from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from "../context/product-context";

export const SingleProduct = () => {
  const { pathname } = useLocation();
  const { prodArr } = useProducts();
  const currentProd = prodArr.find(
    (prod) => prod.id === Number(pathname.slice(1))
  );
  return (
    <div className="m-10 flex single-prod gap">
      <img src={currentProd?.url} alt="" className="single-page-img"/>
      <div className="mb-4 ml-3">
        <h2 className="text-4xl dark:text-white single-prod-title">
          {currentProd?.title.split(" ").slice(0, 2).join(" ")}
        </h2>

        <p className="mb-4">
          Item no. - {currentProd?.albumId + "" + currentProd?.id}
        </p>
        <p className="mr-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="flex gap">
          <button
            type="button"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-6"
          >
            Buy Now
          </button>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-6"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
