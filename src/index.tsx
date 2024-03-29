import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./GlobalStyle";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ImageStoreContext, ImageSearchStore } from "./store";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ImageStoreContext.Provider value={new ImageSearchStore()}>
      <GlobalStyle />
      <App />
    </ImageStoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
