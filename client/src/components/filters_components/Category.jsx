import React from "react";

const Category = ({ category }) => {
  return (
    <a href="" key={category.id}>
      {category.name}
    </a>
  );
};
export default Category;
