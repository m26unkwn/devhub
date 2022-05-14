/** @format */

export const queryFilter = (vidoes, query) => {
  return vidoes.filter(
    ({ title, category, creator }) =>
      title.toLowerCase().includes(query.toLowerCase()) ||
      category.toLowerCase().includes(query.toLowerCase()) ||
      creator.toLowerCase().includes(query.toLowerCase()),
  );
};
