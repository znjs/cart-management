import { nanoid } from "nanoid";
import { faker } from "@faker-js/faker";
import { imageUrls } from "./imageUrl";

const data = {
  products: [...Array(45)].map((ele, index) => {
    return {
      _id: nanoid(),
      itemName: faker.commerce.product(),
      costPrice: faker.commerce.price(200, 5999, 2),
      sellingPrice: faker.commerce.price(200, 5999, 2),
      rating: faker.datatype.float({
        min: 1,
        max: 5,
        precision: 0.1,
      }),
      itemDesc:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      imageUrl: `https://picsum.photos/200/300?random=${index}`,
      altText: "Item Image",
      wishlisted: false,
      cart: false,
      itemCount: 100,
      cartItemCount: 0,
      category: imageUrls[index].split(".")[2].split("/")[4],
    };
  }),
};

export { data };
