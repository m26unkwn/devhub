/** @format */

export function firstCapital(categoryName) {
  return categoryName?.split("")[0].toUpperCase() + categoryName.slice(1);
}
