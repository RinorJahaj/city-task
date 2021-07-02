import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import SingleCity from "./pages/SingleCity";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/city/:id">
            <SingleCity />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
