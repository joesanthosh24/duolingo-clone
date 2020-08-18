import {
  SET_LANGUAGES,
  SET_SELECTED_LANGUAGE,
  SET_USER,
  OPEN_LOGIN,
  OPEN_SIGN_UP,
  CLOSE_LOGIN,
  CLOSE_SIGN_UP,
  LOG_OUT
} from "./action-types";

export const setLanguages = (dispatch, languages) => {
  dispatch({
    type: SET_LANGUAGES,
    payload: languages,
  });
};

export const setSelectedLanguage = (dispatch, language) => {
  dispatch({
    type: SET_SELECTED_LANGUAGE,
    payload: language,
  });
};

export const setUser = (dispatch, user) => {
  dispatch({
    type: SET_USER,
    payload: user,
  });
};

export const openSignUp = (dispatch) => {
  dispatch({
    type: OPEN_SIGN_UP,
  });
};

export const openLogin = (dispatch) => {
  dispatch({
    type: OPEN_LOGIN,
  });
};

export const closeSignUp = (dispatch) => {
  dispatch({
    type: CLOSE_SIGN_UP,
  });
};

export const closeLogin = (dispatch) => {
  dispatch({
    type: CLOSE_LOGIN,
  });
};

export const logOut = (dispatch) => {
  dispatch({
    type: LOG_OUT
  })
}
