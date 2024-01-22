import { createActions } from "redux-actions";
import types from "./types";

export const {
  setLoginData,
  setOtpData,
  setUserData,
  setCurrentTheme,
  setRecentlyPlayed,
  onLogout,
} = createActions(
  types.SET_LOGIN_DATA,
  types.SET_OTP_DATA,
  types.SET_USER_DATA,
  types.SET_CURRENT_THEME,
  types.SET_RECENTLY_PLAYED,
  types.ON_LOGOUT
);
