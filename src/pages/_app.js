import React from "react";
import IndexPage from "./index";
import { Switch, Route, Router } from "./../util/router.js";
import Theme from "../util/Theme.js";
import Auth from "./Auth.jsx";
import Dashboard from "./Dashboard.jsx";
function App() {
  return (
      // <AuthProvider>
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/auth" component={Auth} />
              <Route exact path="/dashboard" component={Dashboard} />
              {/* <Route component={NotFoundPage} /> */}
            </Switch>
          </>
              <Theme />
        </Router>
      // </AuthProvider> 
    
  );
}

export default App;
