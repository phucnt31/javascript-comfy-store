const allProductsUrl = "https://course-api.com/javascript-store-products";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

export { getElement, allProductsUrl };
