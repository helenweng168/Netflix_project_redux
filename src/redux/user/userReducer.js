/* eslint-disable */

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_ITEM,
  ADD_ITEM,
} from "./userTypes";

const initialState = {
  loading: false,
  mylist: [],
  recommendations: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        //users: action.payload,
        mylist: action.payload.mylist,
        recommendations: action.payload.recommendations,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        //users: [],
        mylist: [],
        recommendations: [],
        error: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        recommendations: state.recommendations.concat(
          state.mylist.find((x) => x.id === action.id)
        ),
        mylist: state.mylist.filter((i) => i.id !== action.id),
      };

    case ADD_ITEM:
      return {
        ...state,
        mylist: state.mylist.concat(
          state.recommendations.find((x) => x.id === action.id)
        ),
        recommendations: state.recommendations.filter(
          (i) => i.id !== action.id
        ),
      };

    default:
      return state;
  }
};

export default reducer;
