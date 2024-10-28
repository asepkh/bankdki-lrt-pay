import * as constants from "./constants";

export function setUserData(data) {
  return { type: constants.SET_USER_DATA, payload: data };
}

export function setUserScreen(screen) {
  return { type: constants.SET_USER_SCREEN, payload: screen };
}

export function userLogout() {
  return { type: constants.LOGOUT };
}
