import React, { useEffect, useState } from "react";
import Constants from "../../../utils/js/Constants";
import "./Home.css";
import CustomFilter from "../../organisms/CustomFilter/CustomFilter";
import Launch from "../../atoms/Launch/Launch";
import * as commonServices from "../../../services/common";

const Home = (props) => {
  const [lanches, setLaunches] = useState([]);
  const fetchLanches = async () => {
    try {
      const response = await commonServices.get(Constants.URLs.API.LAUNCHES);
      console.log(response);
      setLaunches(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLanches();
  }, []);

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
          const key = `Launches-${index}`;
          return (
            <Launch
              title={item.title}
              image={item.image}
              key={key}
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
