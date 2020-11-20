import React from "react";
import Pagination from "react-bootstrap/Pagination";
import _ from "lodash";
import PropTypes from "prop-types";

const Paginate = ({ eventsCount, pageSize, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(eventsCount / pageSize);
  if (totalPages === 1) return null;
  const pages = _.range(1, totalPages + 1);
  return (
    <React.Fragment>
      <Pagination>
        <Pagination.Prev />
        {pages.map(page => (
          <Pagination.Item
            key={page}
            onClick={() => onPageChange(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next />
      </Pagination>
    </React.Fragment>
  );
};

Paginate.propTypes = {
  eventsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Paginate;
