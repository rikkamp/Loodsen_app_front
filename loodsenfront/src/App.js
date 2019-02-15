import React, { Component } from "react";
import Home from './pages/index';
import Create from './pages/create';
import { 
  BrowserRouter,
  Route
} from "react-browser-router";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/Create" component={Create} />
          <Route path="/Edit" component={Home} />
          <Route path="/Remove" component={Create} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
