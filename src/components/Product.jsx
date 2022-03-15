import React from "react";
import tw from "tailwind-styled-components";

function Product({
  product: {
    itemName,
    costPrice,
    sellingPrice,
    rating,
    itemDesc,
    wishlisted,
    _id,
    altText,
    imageUrl,
    category,
  },
}) {
  return (
    <>
      <CardContainer>
        <Image src={imageUrl} alt={altText} />
        <CardContent className="pd-i-0625 ">
          <TitleWrapper>
            <CardTitle>{itemName}</CardTitle>
            <Rating>
              {rating}
              <i className="fa-solid fa-star"></i>
            </Rating>
          </TitleWrapper>
          <Category>({category})</Category>
          <PriceHolder>
            <Price className="line-through text-gray-500">₹{costPrice}</Price>
            <Price className="pd-i-0625">₹{sellingPrice}</Price>
            <span className="text-red-400">only</span>
          </PriceHolder>
          <CardDesc className="f-075">{itemDesc}</CardDesc>
          <ButtonContainer className="pd-b-1 fx-jc-se fx-ai-center">
            <CtaButton className="bg-clr-yellow-300 pd-05 brd-sm">
              <i className="fas fa-shopping-cart"></i> Add To Cart
            </CtaButton>
            <ButtonSecondary className="bg-clr-gray-300 pd-05 brd-sm">
              Buy Now
            </ButtonSecondary>
          </ButtonContainer>
        </CardContent>
        <Badge className="p-abs bg-clr-gray-50 brd-round h-105 w-105  top-rgt mg-05">
          <i className="far fa-heart clr-red-400 "></i>
        </Badge>
      </CardContainer>
    </>
  );
}
const CardContainer = tw.div`overflow-hidden relative bg-gray-50 w-64 text-gray-900 brd-hov rounded-lg text-left m-2 `;
const Image = tw.img`h-52 w-64 `;
const CardContent = tw.div`px-2.5 bg-gradient-to-b from-gray-100 to-gray-500 flex flex-col justify-evenly h-fit`;
const CardTitle = tw.h3`text-lg font-semibold my-2 text-xl`;
const Badge = tw.div`absolute bg-gray-50 rounded-full cursor-pointer item-center top-0 right-0 m-2 h-6 w-6`;
const PriceHolder = tw.div``;
const Price = tw.span`px-2`;
const CardDesc = tw.p`text-sm`;
const ButtonContainer = tw.div`py-2 flex flex-col justify-center align-center`;
const CtaButton = tw.button`bg-yellow-300 rounded py-2 mb-1`;
const ButtonSecondary = tw.button`bg-gray-300 py-2 rounded`;
const TitleWrapper = tw.div`flex justify-between align-center`;
const Rating = tw.span`bg-green-500 text-gray-50 p-0.5 rounded my-auto`;
const Category = tw.div``;
export { Product };
