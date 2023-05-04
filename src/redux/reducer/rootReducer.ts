import { combineReducers } from "redux";
import signup from "./signup";
import product from "./product";
import cart from "./cart";

const rootReducers = combineReducers({
  signup: signup,
  product: product,
  cart: cart,
});

export default rootReducers;
