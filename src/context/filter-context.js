import { data } from "../components";
import { createContext, useContext, useReducer, useState } from "react";
import { RATING_FILTER } from "../components";
const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const intialState = {
    rating: null,
    category: [],
    maxPrice: 6000,
    sortOrder: null,
    products: [...data.products],
  };
  const filterReducer = (productsState, action) => {
    let productsStateCopy = { ...productsState };
    switch (action.type) {
      case RATING_FILTER:
        productsStateCopy.rating = action.payload.rating;
        productsStateCopy = {
          ...productsStateCopy,
          products: [
            ...productsStateCopy.products.filter(
              (item) => item.rating >= productsStateCopy.rating
            ),
          ],
        };
        break;
      default:
        break;
    }
    return { ...productsStateCopy };
  };
  const [productsState, dispatch] = useReducer(filterReducer, intialState);
  return (
    <FilterContext.Provider value={{ productsState, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
