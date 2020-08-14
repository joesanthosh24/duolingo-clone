import { SET_LANGUAGES, SET_SELECTED_LANGUAGE, SET_USER } from "./actions/action-types";

export const initialState = {
  user: null,
  languages: [],
  selectedLanguage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGES:
      return {
        ...state,
        languages: action.payload
      };
    case SET_SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
