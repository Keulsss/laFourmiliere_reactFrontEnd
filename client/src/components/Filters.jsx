import React from "react";
import Category from "./Category";
import StickyBox from "react-sticky-box";

class Filters extends React.Component {
  state = { categories: [] };

  componentDidMount = () => {
    const url = "/api/v1/categories/index";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data
        });
      });
  };
  render() {
    const { categories } = this.state;
    const allCategories = categories.map(category => (
      <Category category={category} />
    ));
    const noCategory = <div></div>;

    return (
      <div>
        <div className="widget">
          <span className="widget-title">Dates</span>
          <div className="list-group list-group-categories">
            <a
              href="#"
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              Choisissez une date...
              <span className="badge">
                <i className="icon-chevron-right2"></i>
              </span>
            </a>
            <a
              href="#"
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              Aujourd'hui
              <span className="badge">
                <i className="icon-chevron-right2"></i>
              </span>
            </a>
            <a
              href="#"
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              Demain
              <span className="badge">
                <i className="icon-chevron-right2"></i>
              </span>
            </a>
            <a
              href="#"
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              Ce week-end
              <span className="badge">
                <i className="icon-chevron-right2"></i>
              </span>
            </a>
            <a
              href="#"
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              Cette semaine
              <span className="badge">
                <i className="icon-chevron-right2"></i>
              </span>
            </a>
            <a
              href="#"
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              Semaine suivante
              <span className="badge">
                <i className="icon-chevron-right2"></i>
              </span>
            </a>
            <a
              href="#"
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              Ce mois-ci
              <span className="badge">
                <i className="icon-chevron-right2"></i>
              </span>
            </a>
            <a
              href="#"
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              Mois prochain
              <span className="badge">
                <i className="icon-chevron-right2"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="widget">
          <span className="widget-title">Tags</span>
          <div className="tag-cloud">
            {categories.length > 0 ? allCategories : noCategory}
          </div>
        </div>
      </div>
    );
  }
}
export default Filters;
