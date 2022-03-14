import { nanoid } from "nanoid";
import React from "react";
import tw from "tailwind-styled-components";
import { Product } from "./Product";
function ProductList() {
  return (
    <Wrapper>
      {[...Array(50)].map((ele) => (
        <Product key={nanoid()} />
      ))}
    </Wrapper>
  );
}
const Wrapper = tw.div`w-full m-5 flex flex-row flex-wrap`;

export { ProductList };
