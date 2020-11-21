import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem,
  title
}) => {
  return (
    <div className="widget">
      <span className="widget-title">{title}</span>
      <ul className="list-group list-group-minimal">
        {items.map(item => (
          <li
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
          >
            <a href="#">
              {item[textProperty]}
              <i className={item === selectedItem ? "icon-remove" : ""}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id"
};
export default ListGroup;
