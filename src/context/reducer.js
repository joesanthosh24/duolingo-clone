import {
  SET_LANGUAGES,
  SET_SELECTED_LANGUAGE,
  SET_USER,
  OPEN_LOGIN,
  OPEN_SIGN_UP,
  CLOSE_LOGIN,
  CLOSE_SIGN_UP,
} from "./actions/action-types";

export const initialState = {
  user: null,
  languages: [],
  selectedLanguage: null,
  signUpModalOpen: false,
  loginModalOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGES:
      return {
        ...state,
        languages: action.payload,
      };
    case SET_SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case OPEN_LOGIN:
      return {
        ...state,
        loginModalOpen: true,
      };
    case CLOSE_LOGIN:
      return {
        ...state,
        loginModalOpen: false,
      };
    case OPEN_SIGN_UP:
      return {
        ...state,
        signUpModalOpen: true,
      };
    case CLOSE_SIGN_UP:
      return {
        ...state,
        signUpModalOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;