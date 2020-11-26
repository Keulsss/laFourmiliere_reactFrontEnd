import React, { Component } from "react";
import Cover from "./common/searchBox";
import Events from "./Events";
import Paginate from "./common/Paginate";
import ListGroup from "./common/listGroup";
import Widget from "./common/widget";
import SearchBox from "./common/searchBox";
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
    currentPage: 1,
    selectedCategory: null,
    selectedDate: null,
    searchQuery: ""
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
    this.setState({ selectedCategory: item, searchQuery: "", currentPage: 1 });
  };

  handleDateSelect = item => {
    this.setState({ selectedDate: item, searchQuery: "", currentPage: 1 });
  };

  handleCategoryUnselect = () => {
    this.setState({ selectedCategory: null, currentPage: 1 });
  };

  handleDateUnselect = () => {
    this.setState({ selectedDate: null, currentPage: 1 });
  };

  handleSubmit = query => {
    this.setState({
      searchQuery: query,
      selectedCategory: null,
      selectedDate: null,
      currentPage: 1
    });
  };

  getPagedData = () => {
    const {
      events,
      pageSize,
      currentPage,
      selectedDate,
      selectedCategory,
      searchQuery
    } = this.state;

    const filteredByCaegory = selectedCategory
      ? events.filter(event => event.category_id === selectedCategory.id)
      : null;
    let filtered = events;
    if (searchQuery)
      filtered = events.filter(e =>
        e.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedDate) filtered = datesFilter(events, selectedDate.id);
    else if (selectedCategory)
      filtered = events.filter(
        event => event.category_id === selectedCategory.id
      );
    else if (selectedCategory && selectedDate)
      filtered = datesFilter(filteredByCaegory, selectedDate.id);
    else filtered = events;

    const eventsPaginated = paginator(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, data: eventsPaginated };
  };

  render() {
    const {
      events,
      categories,
      dates,
      pageSize,
      currentPage,
      selectedDate,
      selectedCategory,
      searchQuery
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
            <div className="row gutter-1 align-items-center mb-0">
              <div className="form-group col-md-8">
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
              </div>
              <div className="form-group col-md-2">
                <button className="btn btn-sm btn-outline-primary col">
                  Rechercher
                </button>
              </div>
            </div>
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
