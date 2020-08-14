import { SET_LANGUAGES, SET_SELECTED_LANGUAGE, SET_USER } from "./action-types";

export const setLanguages = (dispatch, languages) => {
  dispatch({
    type: SET_LANGUAGES,
    payload: languages
  });
};

export const setSelectedLanguage = (dispatch, language) => {
  dispatch({
    type: SET_SELECTED_LANGUAGE,
    payload: language
  });
};

export const setUser = (dispatch, user) => {
  dispatch({
    type: SET_USER,
    payload: user
  });
}
