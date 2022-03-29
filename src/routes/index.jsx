import { Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Vitrine from "../pages/Vitrine";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Vitrine />
    </Route>

    <Route path="/cart">
      <Cart />
    </Route>
  </Switch>
);

export default Routes;
