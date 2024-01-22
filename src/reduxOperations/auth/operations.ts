// import { hideLoader, showLoader } from "../../components/appLoader";
import { API } from "../../services";
import { setOtpData, setUserData } from "./actions";

const noop = () => {};

const generateOTP =
  (data, successCallback = noop, failureCallback = noop) =>
  (dispatch) => {
    //  do something here
    // showLoader();
    // API.post("generateotp", data)
    API.post("send-otp", data)
      .then((res) => {
        // hideLoader();
        console.log(res?.data);
        if (res?.data?.success) {
          successCallback(res.data.message);
          dispatch(setOtpData(res.data.data));
        } else {
          failureCallback(res.data);
        }
      })
      .catch((err) => {
        console.log("err is --->", err);
        // hideLoader();
        failureCallback();
      });
  };

const verifyOTP =
  (data, successCallback = noop, failureCallback = noop) =>
  (dispatch) => {
    dispatch(setUserData({}));
    // showLoader();
    API.post("verify-otp", data)
      .then((res) => {
        // hideLoader();

        if (res?.data?.success) {
          successCallback(res.data.message);
        } else {
          failureCallback(res.data);
        }
      })
      .catch((err) => {
        console.log("err is --->", err);
        // hideLoader();
        failureCallback();
      });
  };

const createUser =
  (data, successCallback = noop, failureCallback = noop) =>
  (dispatch) => {
    // showLoader();
    dispatch(setUserData({}));
    API.post("register-user", data)
      .then((res) => {
        console.log("res", res);
        // hideLoader();

        if (res?.data?.success) {
          successCallback(res.data.message);
          dispatch(setUserData(res.data.data));
        } else {
          failureCallback(res.data);
        }
      })
      .catch((err) => {
        console.log("err is --->", err);
        // hideLoader();
        failureCallback();
      });
  };

export default {
  generateOTP,
  verifyOTP,
  createUser,
};
