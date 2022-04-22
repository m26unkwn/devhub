/** @format */

import { v4 as uuid } from "uuid";
import { Javascript, ReactLogo, CssLogo, HtmlLogo } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "React",
    image: ReactLogo,
  },
  {
    _id: uuid(),
    categoryName: "Javascript",
    image: Javascript,
  },
  {
    _id: uuid(),
    categoryName: "Html",
    image: HtmlLogo,
  },
  {
    _id: uuid(),
    categoryName: "Css",
    image: CssLogo,
  },
];
