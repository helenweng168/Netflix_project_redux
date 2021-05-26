import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/index.js";
import { deleteItem } from "../redux/index.js";
import { addItem } from "../redux/index.js";
import "./style.css";

function UsersContainer({ userData, fetchUsers, deleteItem, addItem }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <div className="wrapper">
        <h1>My List</h1>
        <div className="myList">
          {userData &&
            userData.mylist &&
            userData.mylist.map(function (mylist) {
              return (
                <div className="mylistRow">
                  <div className="img">
                    <img src={mylist.img} alt="p1" />
                  </div>
                  <div className="title">
                    <p>{mylist.title}</p>
                  </div>
                  <button
                    className="button"
                    onClick={() => {
                      deleteItem(mylist.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
        <h1>Recommendations</h1>
        <div className="RecommendationsRow">
          {userData &&
            userData.recommendations &&
            userData.recommendations.map(function (recommendations) {
              return (
                <div className="recommendationsRow">
                  <div className="img">
                    <img src={recommendations.img} alt="p1" />
                  </div>
                  <div className="title">
                    <p>{recommendations.title}</p>
                  </div>
                  <button
                    className="button"
                    onClick={() => {
                      addItem(recommendations.id);
                    }}
                  >
                    Add
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    },
    addItem: (id) => {
      dispatch(addItem(id));
    },
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
