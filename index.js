// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";

// specific imports
import fetchProducts from "./src/fetchProducts.js";

const init = async () => {
  const products = await fetchProducts();
  console.log(products);
};

window.addEventListener("DOMContentLoaded", init);
