import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_ITEM,
  ADD_ITEM,
} from "./userTypes";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      //https://jsonplaceholder.typicode.com/users
      //.get("data.json")
      .get("/api/movies")
      .then((response) => {
        console.log(response.data[0]);
        // response.data is the users
        const list = response.data[0];
        //const recommendations = response.data.recommendations;
        dispatch(fetchUsersSuccess(list));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const deleteItem = (id) => {
  return (dispatch) => {
    dispatch(deleteStateItem(id));
  };
};

export const deleteStateItem = (id) => {
  return {
    type: DELETE_ITEM,
    id,
  };
};

export const addItem = (id) => {
  return (dispatch) => {
    dispatch(addStateItem(id));
  };
};

export const addStateItem = (id) => {
  return {
    type: ADD_ITEM,
    id,
  };
};
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
