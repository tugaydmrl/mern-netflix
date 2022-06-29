import axios from "axios"
import { loginStart, loginSuccess, loginFailure, loginNotAdmin } from "./AuthActions"

export const login = async (userInfo, dispatch) => {
    dispatch(loginStart())
    try {
        const res = await axios.post("http://localhost:8800/api/auth/login", userInfo);
        res.data.isAdmin ? dispatch(loginSuccess(res.data)) : dispatch(loginNotAdmin())
    } catch (err) {
        dispatch(loginFailure())
    }
}