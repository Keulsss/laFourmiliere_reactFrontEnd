import React from "react";
import Category from "./Category";
import Date from "./Date";

class Filters extends React.Component {
  state = {
    categories: []
  };

  componentDidMount() {
    const url = "/api/v1/categories/index";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data
        });
      });
  }
  render() {
    const { categories } = this.state;
    const allCategories = categories.map(category => (
      <Category category={category} />
    ));
    return (
      <div className="mt-10">
        <div className="widget">
          <span className="widget-title">Dates</span>
          <div className="list-group list-group-categories">
            {/* {dates.length > 0 ? allDates : ""} */}
          </div>
        </div>
        <div className="widget">
          <span className="widget-title">Catégories</span>
          <div className="tag-cloud">
            {categories.length > 0 ? allCategories : ""}
          </div>
        </div>
      </div>
    );
  }
}
export default Filters;
