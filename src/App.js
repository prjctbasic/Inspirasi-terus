// App.js

import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // Pastikan Anda mengimpor store Redux Anda di sini
import UserComponent from "./components/UserComponent";
import CounterComponent from "./components/CounterComponent";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>My Redux App</h1>
        <UserComponent />
        <CounterComponent />
      </div>
    </Provider>
  );
}

export default App;
