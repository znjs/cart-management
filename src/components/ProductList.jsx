import { nanoid } from "nanoid";
import React from "react";
import tw from "tailwind-styled-components";
import { Product } from "./Product";
import { useFilter } from "../context";
function ProductList() {
  const { productsState } = useFilter();
  console.log(productsState);
  return (
    <Wrapper>
      {[...Array(productsState.length)].map((ele, index) => (
        <Product key={nanoid()} product={productsState[index]} />
      ))}
    </Wrapper>
  );
}
const Wrapper = tw.div`w-full m-5 flex flex-row flex-wrap`;

export { ProductList };
