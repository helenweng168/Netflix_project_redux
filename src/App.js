import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import UsersContainer from "./components/UsersContainer";
import Logo from "./logo.js";

function App() {
  return (
    <Provider store={store}>
      <div className="logo">
        <Logo />
      </div>
      <div className="App">
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
