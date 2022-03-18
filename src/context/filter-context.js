import { data } from "../components";
import { createContext, useContext, useReducer, useState } from "react";
import {
  RATING_FILTER,
  CATEGORY_FILTER,
  PRICE_FILTER,
  SORT_PRICE_ASC_FILTER,
  CLEAR_FILTER,
} from "../components";
const FilterContext = createContext();
const FilterProvider = ({ children }) => {
  const initialState = {
    rating: null,
    category: [],
    maxPrice: 6000,
    sortOrder: 0,
    products: [...data.products],
  };
  const filterReducer = (productsState, action) => {
    let productsStateCopy = { ...productsState };
    // console.log(
    //   "start",
    //   productsStateCopy.rating,
    //   productsStateCopy.maxPrice,
    //   productsStateCopy.category,
    //   productsStateCopy.sortOrder
    // );
    switch (action.type) {
      case RATING_FILTER:
        productsStateCopy = {
          ...productsStateCopy,
          rating: action.payload.rating,
        };
        productsStateCopy = {
          ...productsStateCopy,
          products: [
            ...initialState.products.filter(
              (item) => item.rating >= productsStateCopy.rating
            ),
          ],
        };
        break;
      case CATEGORY_FILTER:
        // console.log(action.payload.checked);
        // console.log(productsStateCopy.category);
        productsStateCopy = {
          ...productsStateCopy,
          category: [
            ...(productsStateCopy.category.includes(
              action.payload.checked.toLowerCase()
            )
              ? productsStateCopy.category.filter(
                  (item) => item !== action.payload.checked.toLowerCase()
                )
              : [
                  ...productsStateCopy.category,
                  action.payload.checked.toLowerCase(),
                ]),
          ],
        };
        productsStateCopy = {
          ...productsStateCopy,
          products: [
            ...(productsStateCopy.category.length
              ? initialState.products.filter((item) =>
                  productsStateCopy.category.includes(item.category)
                )
              : initialState.products),
          ],
        };
        // console.log(productsStateCopy.category);
        break;
      case PRICE_FILTER:
        console.log(action.payload.price);
        productsStateCopy = {
          ...productsStateCopy,
          maxPrice: action.payload.price,
        };
        productsStateCopy = {
          ...productsStateCopy,
          products: [
            ...initialState.products.filter(
              (item) => item.sellingPrice <= action.payload.price
            ),
          ],
        };
        break;
      case SORT_PRICE_ASC_FILTER:
        // console.log(action.payload.sortOrder);
        productsStateCopy = {
          ...productsStateCopy,
          sortOrder: action.payload.sortOrder,
        };
        productsStateCopy = {
          ...productsStateCopy,
          products: [
            ...[...initialState.products].sort((item1, item2) => {
              return productsStateCopy.sortOrder === 1
                ? item1.sellingPrice - item2.sellingPrice
                : item2.sellingPrice - item1.sellingPrice;
            }),
          ],
        };
        break;
      case CLEAR_FILTER:
        productsStateCopy = { ...initialState };
        break;
      default:
        break;
    }
    // console.log(action.payload.checked);
    // console.log(!action.payload.checked);
    // // console.log(action.payload.rating);
    // // console.log(action.payload.price);
    // // console.log(action.payload.sortOrder);

    if (productsStateCopy.category.length && !action.payload.checked) {
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...productsStateCopy.products.filter((item) =>
            productsStateCopy.category.includes(item.category)
          ),
        ],
      };
    }
    if (productsStateCopy.maxPrice !== 6000 && !action.payload.price) {
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...productsStateCopy.products.filter(
            (item) => item.sellingPrice <= productsStateCopy.maxPrice
          ),
        ],
      };
    }
    if (productsStateCopy.rating && !action.payload.rating) {
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...productsStateCopy.products.filter(
            (item) => item.rating >= productsStateCopy.rating
          ),
        ],
      };
    }
    if (productsStateCopy.sortOrder && !action.payload.sortOrder) {
      console.log("sorting after filter", productsStateCopy);
      productsStateCopy = {
        ...productsStateCopy,
        products: [
          ...[...productsStateCopy.products].sort((item1, item2) => {
            return productsStateCopy.sortOrder === 1
              ? item1.sellingPrice - item2.sellingPrice
              : item2.sellingPrice - item1.sellingPrice;
          }),
        ],
      };
    }
    // console.log(
    //   "end",
    //   productsStateCopy.rating,
    //   productsStateCopy.maxPrice,
    //   productsStateCopy.category,
    //   productsStateCopy.sortOrder
    // );
    return { ...productsStateCopy };
  };
  const [productsState, dispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider value={{ productsState, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
