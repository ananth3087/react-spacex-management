import * as actionTypes from "../actions/actionTypes";
import Constants from "../../utils/js/Constants";

const initialState = {
  launches: [],
  loading: false,
  error: false,
  errorMessage: "",
  filter: {
    launch_success: null,
    launch_year: null,
    land_success: null,
  },
};

const fetchLaunchStart = (state) => {
  return {
    ...state,
    loading: true,
    error: false,
    errorMessage: "",
  };
};

const fetchLaunchSuccess = (state, action) => {
  const launch_year =
    action.filterType == Constants.FILTERS.LAUNCH_YEAR.TYPE
      ? action.filterValue
      : state.filter.launch_year;
  const launch_success =
    action.filterType == Constants.FILTERS.SUCCESSFUL_LAUNCH.TYPE
      ? action.filterValue
      : state.filter.launch_success;
  const land_success =
    action.filterType == Constants.FILTERS.SUCCESSFUL_LANDING.TYPE
      ? action.filterValue
      : state.filter.land_success;
  const filter = { launch_year, launch_success, land_success };
  return {
    ...state,
    filter: { ...filter },
    launches: action.launches,
    loading: false,
    error: false,
    errorMessage: "",
  };
};
const applyLaunchFilter = (state, action) => {
  return {
    ...state,
    launches: action.launches,
    filter: { ...state.filter, ...action.filter },
    loading: false,
    error: false,
    errorMessage: "",
  };
};
const fetchLaunchFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    error: true,
    errorMessage: action.error,
  };
};

const reducer = (state = initialState, action) => {
  //NOSONAR Ignore SonarQuib issue
  switch (action.type) {
    case actionTypes.FETCH_LAUNCH_START:
      return fetchLaunchStart(state);
    case actionTypes.FETCH_LAUNCH_SUCCESS:
      return fetchLaunchSuccess(state, action);
    case actionTypes.FETCH_LAUNCH_FAILED:
      return fetchLaunchFailed(state, action);
    case actionTypes.APPLY_LAUNCH_FILTER:
      return applyLaunchFilter(state, action);
    default:
      return state;
  }
};

export default reducer;
