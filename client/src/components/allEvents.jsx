import React, { Component } from "react";
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
import moment from "moment";
import "moment/locale/fr";
import http from "../services/httpService";
import config from "../config.json";

class AllEvents extends Component {
  state = {
    events: [],
    categories: [],
    dates: [],
    pageSize: 10,
    currentPage: 1,
    query: ""
  };

  async componentDidMount() {
    const { data: events } = await http.get(config.eventsUrl);
    const { data: categories } = await http.get(config.categoriesUrl);

    this.setState({ dates, categories, events });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = item => {
    this.setState({
      selectedCategory: item,
      currentPage: 1
    });
  };

  handleDateSelect = item => {
    this.setState({
      selectedDate: item,
      currentPage: 1
    });
  };

  handleCategoryUnselect = () => {
    this.setState({ selectedCategory: null, currentPage: 1 });
  };

  handleDateUnselect = () => {
    this.setState({ selectedDate: null, currentPage: 1 });
  };

  handleSearchBoxChange = query => {
    this.setState({
      query,
      currentPage: 1
    });
  };

  handleSearchBoxSubmit = e => {
    e.preventDefault();
    const { selectedDate, selectedCategory } = this.state;
    const searchQuery = this.state.query;
    this.setState({
      searchQuery,
      selectedCategory,
      selectedDate
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

    let filtered = events;
    if (searchQuery && !selectedCategory && !selectedDate)
      filtered = events.filter(
        e =>
          e.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
          e.city.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
          e.zip_code.includes(searchQuery) ||
          moment(e.start_time)
            .locale("fr")
            .format("LLLL")
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    else if (selectedDate && !selectedCategory && !searchQuery)
      filtered = datesFilter(events, selectedDate.id);
    else if (selectedCategory && !selectedDate && !searchQuery)
      filtered = events.filter(
        event => event.category_id === selectedCategory.id
      );
    else if (selectedCategory && selectedDate && !searchQuery)
      filtered = datesFilter(
        events.filter(event => event.category_id === selectedCategory.id),
        selectedDate.id
      );
    // else if (selectedCategory && selectedDate && searchQuery)
    //   filtered = datesFilter(
    //     events
    //       .filter(event => event.category_id === selectedCategory.id)
    //       .filter(
    //         e =>
    //           e.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
    //           e.city.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
    //           e.zip_code.includes(searchQuery) ||
    //           moment(e.start_time)
    //             .locale("fr")
    //             .format("LLLL")
    //             .toLowerCase()
    //             .includes(searchQuery.toLowerCase())
    //       ),
    //     selectedDate.id
    //   );
    else filtered = events;

    const data = paginator(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, data };
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
      query
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
            <form onSubmit={this.handleSearchBoxSubmit}>
              <div className="row gutter-1 align-items-center mb-0">
                <div className="form-group col-md-8">
                  <SearchBox
                    value={query}
                    onChange={this.handleSearchBoxChange}
                  />
                </div>
                <div className="form-group col-md-2">
                  <button
                    type="submit"
                    className="btn btn-sm btn-outline-primary col"
                  >
                    Rechercher
                  </button>
                </div>
              </div>
            </form>
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
