import React from "react";

class Category extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <a href="" key={category.id}>
        {category.name}
      </a>
    );
  }
}
export default Category;
