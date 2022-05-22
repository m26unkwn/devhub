/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { Provider } from "react-redux";
import { store } from "./store/index";

import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider, ScrollToTopProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <ScrollToTopProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ScrollToTopProvider>
      </ToastProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
