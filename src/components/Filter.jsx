import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { HR_STYLE, FILTER_CATEGORIES } from "./index";
import { nanoid } from "nanoid";
function Filter() {
  const [price, setPrice] = useState("6000");
  return (
    <Wrapper>
      <Title>
        <Header>Filter</Header>
        <ClearFilter>clear filter</ClearFilter>
      </Title>
      <Ruler style={HR_STYLE} />
      <Container>
        <Header>Rating</Header>
        {[4, 3, 2, 1].map((ele) => (
          <Item key={nanoid()}>
            <Radio type="radio" id={ele} name="rating" value={ele} />
            <Label htmlFor={ele}>
              {[1, 2, 3, 4, 5].map((count) =>
                count > ele ? (
                  <StarRegular key={nanoid()} />
                ) : (
                  <StarSolid key={nanoid()} />
                )
              )}{" "}
              &amp; above
            </Label>
          </Item>
        ))}
      </Container>
      <Ruler style={HR_STYLE} />
      <Container>
        <Header>Category</Header>
        {FILTER_CATEGORIES.map((ele) => (
          <Item key={nanoid()}>
            <Checkbox type="checkbox" id={ele} name="categories" value={ele} />
            <Label htmlFor={ele}>{ele}</Label>
          </Item>
        ))}
      </Container>
      <Ruler style={HR_STYLE} />
      <Container>
        <Header>Price</Header>
        <PriceRange>
          <Holder>200</Holder>
          <Holder>{price}</Holder>
        </PriceRange>
        <Slider
          type="range"
          name="price"
          id="price"
          min="200"
          max="6000"
          value={price}
          step="20"
          onChange={(e) => setPrice(e.target.value)}
          onMouseUp={(e) => console.log(price)}
        />
      </Container>
      <Ruler style={HR_STYLE} />
      <Container>
        <Header>Sort by</Header>
        <Item>
          <Radio
            type="radio"
            id="low-to-high"
            name="price-sorting"
            value="low-to-high"
          />
          <Label htmlFor="low-to-high">price low-to-high</Label>
        </Item>
        <Item>
          <Radio
            type="radio"
            id="high-to-low"
            name="price-sorting"
            value="high-to-low"
          />
          <Label htmlFor="high-to-low">price high-to-low</Label>
        </Item>
      </Container>
    </Wrapper>
  );
}
const Wrapper = tw.div`w-72 bg-gray-100 text-gray-900 p-4 my-5 h-full sticky top-4 left-0`;
const Title = tw.div`flex justify-between p-2`;
const Header = tw.h3``;
const ClearFilter = tw.a`cursor-pointer text-blue-600 underline`;
const Ruler = tw.hr`text-gray-900 my-2`;
const Container = tw.div`flex-col`;
const Item = tw.div`text-left px-2 py-1 flex items-center`;
const Radio = tw.input``;
const Checkbox = tw.input`mx-1`;
const Slider = tw.input`w-4/5`;
const Label = tw.label``;
const PriceRange = tw.div`flex justify-between w-4/5 mx-auto`;
const Holder = tw.p``;

const StarSolid = tw.i`fa-solid fa-star text-yellow-400`;
const StarRegular = tw.i`fa-regular fa-star text-yellow-400`;
export { Filter };
