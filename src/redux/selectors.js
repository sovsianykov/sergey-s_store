import { createSelector } from "reselect";

export const selectAllProducts = createSelector(
  (state) => state.productsSlice.products,
  (products) => {
    const { data, isLoading, error } = products;
      console.log(data)
    return {
      houses: data,
      isLoading,
      error,
    };
  }
);
export const selectCart = createSelector(
  (state) => state.productsSlice.cart,
  (cart) => {
    const totalSum = cart.reduce((acc, house) => acc + house.price, 0);

    return {
      cart,
      totalSum,
    };
  }
);
