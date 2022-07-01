import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [prodArr, setProdArr] = useState([]);
  const [page, setPage] = useState(1);
  const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`;

  const nextPageHandler = () => {
    setPage((prev) => prev + 1);
  };

  const previousPageHandler = () => {
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        setProdArr(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url]);
  return (
    <ProductContext.Provider
      value={{ prodArr, nextPageHandler, previousPageHandler, page }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
