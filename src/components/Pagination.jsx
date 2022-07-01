import React from "react";
import { useProducts } from "../context/product-context";

export const Pagination = () => {
  const { nextPageHandler, previousPageHandler, page } = useProducts();
  return (
    <nav className="inline-flex mt-30">
      <button
        onClick={previousPageHandler}
        disabled={page === 1}
        className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Previous
      </button>

      <div className="py-2 px-3 text-orange-400 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-orange-600 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
        {page}
      </div>

      <button
        onClick={nextPageHandler}
        className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
      </button>
    </nav>
  );
};
