import * as actionTypes from "./actionTypes";
export const fetchLaunch = (filterType = null, filterValue = null) => {
  return {
    type: actionTypes.FETCH_LAUNCH,
    filterType,
    filterValue,
  };
};
export const fetchLaunchStart = () => {
  return {
    type: actionTypes.FETCH_LAUNCH_START,
  };
};
export const fetchLaunchSuccess = (launches, filterType, filterValue) => {
  return {
    type: actionTypes.FETCH_LAUNCH_SUCCESS,
    launches: launches,
    filterType,
    filterValue,
  };
};

export const fetchLaunchFailed = (error) => {
  return {
    type: actionTypes.FETCH_LAUNCH_FAILED,
    error: error,
  };
};
export const applyLaunchFilter = (filter) => {
  return {
    type: actionTypes.APPLY_LAUNCH_FILTER,
    filter,
  };
};
