import React from "react";
import Constants from "../../../utils/js/Constants";
import "./Launch.css";
const Launch = ({ launch }) => {
  const {
    flight_number,
    mission_name,
    mission_id,
    launch_year,
    launch_success,
    rocket,
    image = launch.links.mission_patch_small,
  } = launch;

  const land_success =
    rocket &&
    rocket.first_stage &&
    rocket.first_stage.cores &&
    rocket.first_stage.cores.length > 0 &&
    rocket.first_stage.cores[0].land_success;
  const title = `${mission_name} #${flight_number}`;

  const renderDetails = (label, value) => {
    const valueType = typeof value;
    if (valueType == "object") {
      return (
        <div className="launch-prop__item launch-prop__item-list">
          <div className="launch-prop__item-label">{label}: </div>
          <div className="launch-prop__item-value">
            <ul>
              {value &&
                value.length > 0 &&
                value.map((item) => <li key={item}>{item}</li>)}
              {(!value || (value && value.length === 0)) && (
                <li className="launch-prop__item-msg">No Ids found</li>
              )}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="launch-prop__item">
          <div className="launch-prop__item-label">{label}: </div>
          <div className="launch-prop__item-value">{value}</div>
        </div>
      );
    }
  };
  return (
    <div className="launch">
      <div className="launch__image-wrapper">
        <img alt="launch" src={image} />
      </div>
      <h5 className="launch__title">{title}</h5>
      {renderDetails("Mission Ids", mission_id)}
      {renderDetails("Launch Year", launch_year)}
      {renderDetails(
        "Successful Launch",
        launch_success ? "Success" : "Failure"
      )}
      {renderDetails(
        "Successful Landing",
        land_success ? "Success" : "Failure"
      )}
    </div>
  );
};

export default Launch;
