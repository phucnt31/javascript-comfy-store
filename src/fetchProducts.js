import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  try {
    const resp = await fetch(allProductsUrl);
    if (resp) {
      const data = await resp.json();
      return data;
    }
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
