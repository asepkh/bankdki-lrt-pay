import * as constants from "./constants";

const INITIAL_STATE = {
  isLoggedIn: false,
  phoneNumber: null,
  screen: "input-phone-number",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.SET_USER_DATA:
      return Object.assign({}, state, {
        ...action?.payload,
      });
    case constants.SET_USER_SCREEN:
      return Object.assign({}, state, {
        screen: action?.payload,
      });
    case constants.LOGOUT:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default reducer;
