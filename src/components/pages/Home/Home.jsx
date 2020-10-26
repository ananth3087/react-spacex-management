import React from "react";
import Constants from "../../../utils/js/Constants";
import "./Home.css";
import CustomFilter from "../../organisms/CustomFilter/CustomFilter";
import Launch from "../../atoms/Launch/Launch";
const Home = (props) => {
  return (
    <div className="home">
      <div className="sidebar">
        <h5 className="sidebar__title">{Constants.FILTERS.TITLE}</h5>
        <div className="sidebar__filter-item">
          <CustomFilter
            label={Constants.FILTERS.LAUNCH_YEAR.LABEL}
            items={Constants.FILTERS.LAUNCH_YEAR.ITEMS}
          />
        </div>
        <div className="sidebar__filter-item">
          <CustomFilter
            label={Constants.FILTERS.SUCCESSFUL_LAUNCH.LABEL}
            items={Constants.FILTERS.SUCCESSFUL_LAUNCH.ITEMS}
          />
        </div>
        <div className="sidebar__filter-item">
          <CustomFilter
            label={Constants.FILTERS.SUCCESSFUL_LANDING.LABEL}
            items={Constants.FILTERS.SUCCESSFUL_LANDING.ITEMS}
          />
        </div>
      </div>
      <div className="home__content">
        {Constants.LAUNCH.LIST.map((item, index) => {
          return (
            <Launch
              title={item.title}
              image={item.image}
              properties={item.properties}
            />
          );
        })}
      </div>

      <span className="footer__label">{Constants.FOOTER.LABEL}</span>
      <span className="footer__dev-name">
        {Constants.FOOTER.DEVELOPER_NAME}
      </span>
    </div>
  );
};

export default Home;
