import React from "react";

const Tags = ({
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
      <div className="tag-cloud">
        {items.map(item => (
          <a
            href="#"
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem ? "list-group-item-link-active" : "active"
            }
          >
            {item[textProperty]}
          </a>
        ))}
      </div>
    </div>
  );
};

Tags.defaultProps = {
  textProperty: "name",
  valueProperty: "id"
};

export default Tags;
