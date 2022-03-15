import { data } from "../components";
import { createContext, useContext, useReducer, useState } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const products = [...data.products];
  const intialState = {
    star: null,
    category: [],
    maxPrice: 6000,
    sortOrder: null,
  };
  const filterReducer = (productsState, action) => {
    switch (action.type) {
      case "RATING_FILTER":
        console.log(action.payload.rating);
        return [
          ...products.filter((item) => item.rating >= action.payload.rating),
        ];
      case "PRICE_FILTER":
        return [
          ...products.filter(
            (item) => item.sellingPrice <= action.payload.price
          ),
        ];
      case "SORT_PRICE_ASC":
        if (action.payload.sort_asc) {
          return [
            ...[...products].sort((item1, item2) => {
              return item1.sellingPrice - item2.sellingPrice;
            }),
          ];
        } else {
          return [
            ...[...products].sort((item1, item2) => {
              return item2.sellingPrice - item1.sellingPrice;
            }),
          ];
        }
      case "RESET":
        return [...products];
      default:
        return [...productsState];
    }
  };
  const [productsState, dispatch] = useReducer(filterReducer, products);
  return (
    <FilterContext.Provider value={{ productsState, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
