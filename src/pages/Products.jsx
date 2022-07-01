import React from "react";
import { Pagination } from "../components/Pagination";
import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../context/product-context";

export const Products = () => {
  const { prodArr } = useProducts();
  return (
    <div className="flex flex-col gap-10 items-center products-wrap">
      <div className="flex flex-wrap gap-4">
        {prodArr.map((prod) => {
          return <ProductCard prod={prod} key={prod.id} />;
        })}
      </div>
      <Pagination />
    </div>
  );
};
