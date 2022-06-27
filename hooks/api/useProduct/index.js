import { useQuery } from "react-query";
import axios from "axios";

const fetchProducts = async () => {
  let tableData = await axios(
    `http://172.17.72.128:8000/db2_sp`
  );
  const result = tableData?.data.rtnResult;
  return result;
};

const useProducts = (inputId) => {
  return useQuery(["list", inputId], async () => await fetchProducts(inputId));
};

export { useProducts, fetchProducts };
