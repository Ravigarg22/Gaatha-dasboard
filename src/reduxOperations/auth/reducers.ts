import { handleActions } from "redux-actions";

import types from "./types";

const initialState = {
  isLoading: false,
  userDetails: null,
  otpData: {},
  userData: {},
  currentTheme: "dark",
  recentlyPlayed: [],
};

const loginReducer = handleActions(
  {
    [types.SET_LOGIN_DATA]: (state, { payload }) => ({
      ...state,
      userDetails: payload,
    }),
    [types.LOGIN_SUCCESS]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [types.SET_OTP_DATA]: (state, { payload }) => ({
      ...state,
      otpData: payload,
    }),
    [types.SET_USER_DATA]: (state, { payload }) => {
      // console.log("user data called", payload);
      return {
        ...state,
        userData: payload,
      };
    },
    [types.SET_CURRENT_THEME]: (state, { payload }) => ({
      ...state,
      currentTheme: payload,
    }),
    [types.SET_RECENTLY_PLAYED]: (state, { payload }) => ({
      ...state,
      recentlyPlayed: payload,
    }),
    [types.ON_LOGOUT]: (state, { payload }) => ({
      ...initialState,
      currentTheme: state.currentTheme,
    }),
  },
  initialState
);

export default loginReducer;
