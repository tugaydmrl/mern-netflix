import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./AuthActions";

export const login = async (userInfo, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", userInfo);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
