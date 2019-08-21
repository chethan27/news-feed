import React from "react";
import NewsPage from "./containers/NewsPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Route exact path="/" component={NewsPage} />
          <Route path="/like" component={NewsPage} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
