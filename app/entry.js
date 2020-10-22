import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Featured
import About from "./views/About";
import Contact from "./views/Contact";
import Index from "./views/Index";
import NotFound from "./views/NotFound";
import Research from "./views/Research";
import Articles from "./views/Articles";
import Initiatives from "./views/Initiatives";

// All of our CSS
import "./static/css/main.scss";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/about" component={About} />
      <Route exact path="/initiatives" component={Initiatives} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/contact" component={Contact} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

//<Route path="/research" component={Projects} />
