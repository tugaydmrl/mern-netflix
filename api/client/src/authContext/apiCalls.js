import axiosInstance from "../config";
import { loginStart, loginSuccess, loginFailure } from "./AuthActions";

export const login = async (userInfo, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("auth/login", userInfo);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
