import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"

import './static/style/common/shared.css'
import { AppProvider } from "./context"

const app = (
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
