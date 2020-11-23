import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem,
  title,
  onItemUnselect
}) => {
  return (
    <div className="widget">
      <span className="widget-title">{title}</span>
      <ul className="list-group list-group-minimal">
        {items.map(item => (
          <a
            key={item[valueProperty]}
            href="#"
            className={
              item === selectedItem
                ? "list-group-item d-flex justify-content-between align-items-center active shadow"
                : "list-group-item d-flex justify-content-between align-items-center"
            }
            onClick={
              item !== selectedItem ? () => onItemSelect(item) : undefined
            }
          >
            {item[textProperty]}
            <span
              className={item === selectedItem ? "icon-x" : ""}
              onClick={
                item === selectedItem ? () => onItemUnselect(item) : undefined
              }
            ></span>
          </a>
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
