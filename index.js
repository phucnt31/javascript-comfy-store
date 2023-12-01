// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";

// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
  }
};

window.addEventListener("DOMContentLoaded", init);
