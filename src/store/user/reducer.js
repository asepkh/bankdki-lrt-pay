import * as constants from "./constants";

const INITIAL_STATE = {
  isLoggedIn: false,
  phoneNumber: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.SET_USER_DATA:
      return Object.assign({}, state, {
        ...action?.payload,
      });
    case constants.LOGOUT:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default reducer;
