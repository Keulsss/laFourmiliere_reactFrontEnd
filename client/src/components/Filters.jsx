import React from "react";
import Category from "./filters_components/Category";
import Date from "./filters_components/Date";

const Filters = ({ categories, dates }) => {
  const allCategories = categories.map(category => (
    <Category category={category} key={category.id} />
  ));
  const allDates = dates.map(date => <Date date={date} key={date} />);
  return (
    <div className="mt-10">
      <div className="widget">
        <span className="widget-title">Dates</span>
        <div className="list-group list-group-categories">{allDates}</div>
      </div>
      <div className="widget">
        <span className="widget-title">Catégories</span>
        <div className="tag-cloud">{allCategories}</div>
      </div>
    </div>
  );
};

export default Filters;
