//React
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { Auth0Provider } from "./Components/Auth0/auth0-wrapper.js";
import auth0Config from "./Components/Auth0/auth0-config.json";

// Auth0 Redirect that routes the user to the corresponding place after login.
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={auth0Config.domain}
    client_id={auth0Config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
