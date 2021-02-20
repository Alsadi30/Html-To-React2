import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import "./style.css";
// import "./assets/css/animate.css";
import "./assets/css/bootstrap-grid.css";
import "./assets/css/bootstrap.css";
import "./assets/css/bootstrap-reboot.css";
import "./assets/css/bootstrap-select.css";
import "./assets/css/colors_landing_page.css";
import "./assets/css/colors1.css";
import "./assets/css/colors2.css";
import "./assets/css/colors3.css";
import "./assets/css/custom.css";
import "./assets/css/hizoom.css";
import "./assets/css/responsive.css";
import "./assets/css/owl.theme.default.css";
// import "./assets/css/dark_layout.css";
// import "./assets/css/colors1_dark.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
