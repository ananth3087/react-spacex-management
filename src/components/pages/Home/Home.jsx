import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Constants from "../../../utils/js/Constants";
import "./Home.css";
import CustomFilter from "../../organisms/CustomFilter/CustomFilter";
import Launch from "../../atoms/Launch/Launch";
import { fetchLaunch, applyLaunchFilter } from "./../../../store/actions/index";
import queryString from "query-string";

const Home = (props) => {
  useEffect(() => {
    const { land_success, launch_success, launch_year } = queryString.parse(
      props.location.search
    );
    const filter = { land_success, launch_success, launch_year };
    props.applyLaunchFilter(filter);
    props.fetchLaunch();
  }, []);

  const launches = props.launches;
  const handleFilter = (filterType, filterValue) => {
    props.fetchLaunch(filterType, filterValue);
    let queryParam = "?applyfilter=yes";
    const launch_year =
      filterType == Constants.FILTERS.LAUNCH_YEAR.TYPE
        ? filterValue
        : props.launch_year;
    if (launch_year) {
      queryParam = `${queryParam}&launch_year=${launch_year}`;
    }
    const launch_success =
      filterType == Constants.FILTERS.SUCCESSFUL_LAUNCH.TYPE
        ? filterValue
        : props.launch_success;
    if (launch_success) {
      queryParam = `${queryParam}&launch_success=${launch_success}`;
    }
    const land_success =
      filterType == Constants.FILTERS.SUCCESSFUL_LANDING.TYPE
        ? filterValue
        : props.land_success;
    if (land_success) {
      queryParam = `${queryParam}&land_success=${land_success}`;
    }

    props.history.push({
      pathname: "/",
      search: queryParam,
    });
  };
  return (
    <div className="home">
      <div className="sidebar">
        <h5 className="sidebar__title">{Constants.FILTERS.TITLE}</h5>
        <div className="sidebar__filter-item">
          <CustomFilter
            label={Constants.FILTERS.LAUNCH_YEAR.LABEL}
            items={Constants.FILTERS.LAUNCH_YEAR.ITEMS}
            type={Constants.FILTERS.LAUNCH_YEAR.TYPE}
            handleFilter={handleFilter}
            selectedValue={props.launch_year}
          />
        </div>
        <div className="sidebar__filter-item">
          <CustomFilter
            label={Constants.FILTERS.SUCCESSFUL_LAUNCH.LABEL}
            items={Constants.FILTERS.SUCCESSFUL_LAUNCH.ITEMS}
            type={Constants.FILTERS.SUCCESSFUL_LAUNCH.TYPE}
            handleFilter={handleFilter}
            selectedValue={props.launch_success}
          />
        </div>
        <div className="sidebar__filter-item">
          <CustomFilter
            label={Constants.FILTERS.SUCCESSFUL_LANDING.LABEL}
            items={Constants.FILTERS.SUCCESSFUL_LANDING.ITEMS}
            type={Constants.FILTERS.SUCCESSFUL_LANDING.TYPE}
            handleFilter={handleFilter}
            selectedValue={props.land_success}
          />
        </div>
      </div>
      <div className="home__content">
        {launches &&
          launches.length > 0 &&
          launches.map((item, index) => {
            const key = `Launches-${index}`;
            if (index > 30) return; // testing purpose to avoid loadin more data
            return <Launch launch={item} key={key} />;
          })}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchLaunch,
  applyLaunchFilter,
};
const mapStateToProps = (state) => {
  return {
    launches: state.launch.launches,
    loading: state.launch.loading,
    error: state.launch.error,
    errorMessage: state.launch.errorMessage,
    launch_success: state.launch.filter.launch_success,
    land_success: state.launch.filter.land_success,
    launch_year: state.launch.filter.launch_year,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
