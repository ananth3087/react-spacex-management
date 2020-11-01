import React from "react";
import Constants from "../../../utils/js/Constants";
import "./CustomFilter.css";
const CustomFilter = ({ type, label, items, handleFilter, selectedValue }) => {
  return (
    <div className="custom-filter">
      <div className="custom-filter__label">{label}</div>
      <div className="custom-filter__items-wrapper">
        {items.map((item, index) => {
          const activeClass =
            selectedValue == item
              ? "custom-filter__item-active custom-filter__item"
              : "custom-filter__item";
          const key = "cst-filter-" + label + index;
          return (
            <div className="custom-filter__item-wrapper" key={key}>
              <div
                className={activeClass}
                onClick={() => handleFilter(type, item)}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomFilter;
