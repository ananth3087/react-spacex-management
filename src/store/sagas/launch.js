import * as commonServices from "../../services/common";
import { put, select } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as selectors from "./selectors";
import Constants from "../../utils/js/Constants";

export function* fetchLaunchSaga(action) {
  try {
    let url = Constants.URLs.API.LAUNCHES;
    const filterType = action.filterType;
    const filterValue = action.filterValue;
    const launch = yield select(selectors.launch);
    const launch_year =
      filterType == Constants.FILTERS.LAUNCH_YEAR.TYPE
        ? filterValue
        : launch.filter.launch_year;
    if (launch_year) {
      url = `${url}&launch_year=${launch_year}`;
    }
    const launch_success =
      filterType == Constants.FILTERS.SUCCESSFUL_LAUNCH.TYPE
        ? filterValue
        : launch.filter.launch_success;
    if (launch_success) {
      url = `${url}&launch_success=${launch_success}`;
    }
    const land_success =
      filterType == Constants.FILTERS.SUCCESSFUL_LANDING.TYPE
        ? filterValue
        : launch.filter.land_success;
    if (land_success) {
      url = `${url}&land_success=${land_success}`;
    }
    yield put(actions.fetchLaunchStart());

    const response = yield commonServices.get(url);

    if (!response.error && !response.errorMessage) {
      yield put(actions.fetchLaunchSuccess(response, filterType, filterValue));
    } else {
      const error = response.errorMessage
        ? response.errorMessage
        : Constants.MESSAGE.ERROR.LAUNCH_NOT_FOUND;
      yield put(actions.fetchLaunchFailed(error));
    }
  } catch (error) {
    yield put(
      actions.fetchLaunchFailed(Constants.MESSAGE.ERROR.LAUNCH_NOT_FOUND)
    );
  }
}
