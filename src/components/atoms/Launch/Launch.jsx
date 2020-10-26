import React from "react";
import Constants from "../../../utils/js/Constants";
import "./Launch.css";
const Launch = ({ img, title, properties }) => {
  return (
    <div className="launch">
      <div className="launch__image-wrapper">
        <img alt="launch" src={img} />
      </div>
      <h5 className="launch__title">{title}</h5>
      {properties &&
        properties.length > 0 &&
        properties.map((item, index) => {
          const key = "launch-props-" + title + index;
          return (
            <div className="launch-prop__item" key={key}>
              <div className="launch-prop__item-label">{item.label}</div>
              <div className="launch-prop__item-value">{item.value}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Launch;
