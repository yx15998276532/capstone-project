import React from "react";
import Header from "./component/Header";
import { Switch, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Photos from "./Pages/Photos";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
