import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Featured
import About from "./views/About";
import Contact from "./views/Contact";
import Index from "./views/Index";
import NotFound from "./views/NotFound";
import Articles from "./views/Articles";
import Research from "./views/Research";
import Initiatives from "./views/Initiatives";

// All of our CSS
import "./static/css/main.scss";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/articles" component={Articles} />
      <Route path="/contact" component={Contact} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

//<Route path="/research" component={Research} />
//<Route path="/initiatives" component={Initiatives} />
