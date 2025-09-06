import shoppopularhangingeggchair from "../../assets/images/shop-popular-hanging-egg-chair.png";
import shoppopularcushionYellow from "../../assets/images/shop-popular-cushion-Yellow.png";
import shoppopularpedantlamp from "../../assets/images/shop-popular-pedant-lamp.png";

const shopCategories = [
  {
    title: "Collection Layout",
    links: [
      "Collection layout 01",
      "Collection layout 02",
      "Collection layout 03",
      "Collection layout 04",
    ],
  },
  {
    title: "Product Types",
    links: [
      "Product Style 01",
      "Product Style 02",
      "Product Style 03",
      "Product Style 04",
      "Product Style 05",
    ],
  },
  {
    title: "Product Features",
    links: [
      "Product default",
      "Product Variable",
      "Product countdown",
      "Product grouped",
      "Product Out-of-stock",
    ],
  },
  {
    title: "Product Layouts",
    links: [
      "Layout 01 - Bottom thumb",
      "Layout 02 - Left thumb",
      "Layout 03 - Right thumb",
      "Layout 04 - No thumb",
      "Layout 05 - No thumb center",
      "Layout 06 - No thumb fullwidth",
      "Layout 07 - Gallery",
    ],
  },
  {
    title: "Popular Products",
    products: [
      {
        name: "Hanging egg chair",
        rating: 5,
        price: "$9.00",
        image: shoppopularhangingeggchair,
      },
      {
        name: "Objects cushion-Yellow",
        rating: 5,
        price: "$9.00",
        image: shoppopularcushionYellow,
      },
      {
        name: "Victo pedant lamp",
        rating: 5,
        price: "$9.00",
        image: shoppopularpedantlamp,
      },
    ],
  },
];
export default shopCategories;
