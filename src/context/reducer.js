import {
  SET_LANGUAGES,
  SET_SELECTED_LANGUAGE,
  SET_USER,
  OPEN_LOGIN,
  OPEN_SIGN_UP,
  CLOSE_LOGIN,
  CLOSE_SIGN_UP,
  LOG_OUT,
  CHANGE_COLOR,
  ADD_LEARNING_LANGUAGE,
  CLEAR_LEARNING_LANGUAGES
} from "./actions/action-types";

export const initialState = {
  user: null,
  languages: [],
  selectedLanguage: null,
  signUpModalOpen: false,
  loginModalOpen: false,
  color: "",
  learningLanguages: [],
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
        selectedLanguage: state.languages.filter(
          (lang) => action.payload.id === lang.id
        ),
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
    case LOG_OUT:
      return {
        ...state,
        user: null,
      };
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case ADD_LEARNING_LANGUAGE:
      return {
        ...state,
        learningLanguages: [...state.learningLanguages, action.payload],
      };
    case CLEAR_LEARNING_LANGUAGES:
      return {
        ...state,
        learningLanguages: []
      }
    default:
      return state;
  }
};

export default reducer;
