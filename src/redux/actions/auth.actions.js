import HomePage from "../../pages/HomePage/HomePage";
import { API } from "../../shared/api";
import Cookies from 'js-cookie';

export const userLogin = (formData , navigate) => async(dispatch, getState) => {
    dispatch({ type: "user_login" })

    try {
        const results = await API.post("/user/login/", formData);
        Cookies.set('user', JSON.stringify(results.data.userData));
        Cookies.set('token', results.data.token);
        dispatch({ type: "user_login_ok", payload: results.data });
        navigate('/home');
        dispatch(setUserInfo(results.data.userData));
    } catch (error) {
        dispatch({ type: "user_login_ko", payload: error })
    }
}

export const setUserInfo = (userInfo) => {
    return {
      type: "SET_USER_INFO",
      payload: userInfo,
    };
  };

  
export const handleRegister = (formData , navigate) => async(dispatch) => {
    dispatch({ type: "register_user"})

    try {
        const results = await API.post("/user/register/", formData);
        dispatch({ type: "register_user_ok", payload: results.data});
        Cookies.set('user', JSON.stringify(results.data.newEmail))
        Cookies.set('token' , results.data.token);
        navigate('/home');
    } catch (error) { 
        dispatch({ type: "regiser_user_ko", payload: error })
    }
    
}

export const logoutUser = (navigate) => (dispatch) => {
    dispatch({ type: "user_logout"})
    Cookies.remove('token');
    Cookies.remove('user');
    navigate('/');
    try {
        dispatch({type : "logout_user_ok"})
    } catch (error) {
        dispatch({ type : "logout_user_ko"})
    }

}

