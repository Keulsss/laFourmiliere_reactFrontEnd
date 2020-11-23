import React, { Component } from "react";
import Cover from "./common/Cover";
import Events from "./common/Events";
import Paginate from "./common/Paginate";
import ListGroup from "./common/listGroup";
import Widget from "./common/widget";
import dates from "./utils/dates";
import paginator from "./utils/paginator";
import datesFilter from "./utils/datesfilter";
import "../vendor/scss/style.scss";
import StickyBox from "react-sticky-box";

class AllEvents extends Component {
  state = {
    events: [],
    categories: [],
    dates: [],
    pageSize: 10,
    currentPage: 1
  };

  componentDidMount = () => {
    const eventsUrl = "/api/v1/events/index";
    const categoriesUrl = "/api/v1/categories/index";
    fetch(eventsUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          events: data
        });
      });
    fetch(categoriesUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data
        });
      });
    this.setState({ dates });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = item => {
    this.setState({ selectedCategory: item, currentPage: 1 });
  };

  handleDateSelect = item => {
    this.setState({ selectedDate: item, currentPage: 1 });
  };

  handleCategoryUnselect = () => {
    this.setState({ selectedCategory: null, currentPage: 1 });
  };

  handleDateUnselect = () => {
    this.setState({ selectedDate: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      events,
      pageSize,
      currentPage,
      selectedDate,
      selectedCategory
    } = this.state;

    const filtered = selectedDate
      ? datesFilter(events, selectedDate.id)
      : datesFilter(events, undefined);

    const filteredByCategory = selectedCategory
      ? filtered.filter(event => event.category_id === selectedCategory.id)
      : filtered;

    const eventsPaginated = paginator(
      filteredByCategory,
      currentPage,
      pageSize
    );
    return { totalCount: filteredByCategory.length, data: eventsPaginated };
  };

  render() {
    const {
      events,
      categories,
      dates,
      pageSize,
      currentPage,
      selectedDate,
      selectedCategory
    } = this.state;

    const { totalCount, data: eventsPaginated } = this.getPagedData();

    return (
      <div className="row">
        <aside className="col-md-3 bg-light pl-lg-5">
          <StickyBox>
            <div
              style={{
                height: 800,
                position: "relative",
                overflow: "auto",
                top: 30
              }}
            >
              <ListGroup
                items={dates}
                onItemSelect={this.handleDateSelect}
                onItemUnselect={this.handleDateUnselect}
                selectedItem={selectedDate}
                title="DATE"
              />
              <Widget
                items={categories}
                onItemUnselect={this.handleCategoryUnselect}
                onItemSelect={this.handleCategorySelect}
                selectedItem={selectedCategory}
                title="CATEGORIE"
              />
            </div>
          </StickyBox>
        </aside>
        <div className="col-md-7">
          <div className="container-fluid">
            <Cover />
            <Events
              currentPage={currentPage}
              pageSize={pageSize}
              eventsPaginated={eventsPaginated}
              events={events}
            />
            <div className="row align-items-center justify-content-center mb-1">
              <Paginate
                eventsCount={totalCount}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllEvents;
