import * as actionTypes from "../actions/actionTypes";
import { fetchLaunchSaga } from "./launch";
import { takeEvery } from "redux-saga/effects";

export function* watchReprints() {
  yield takeEvery(actionTypes.FETCH_LAUNCH, fetchLaunchSaga);
}
