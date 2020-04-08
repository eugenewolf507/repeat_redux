import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import timerReducer from "./timer/timerReducer";
import postsReducer from "./posts/postsReducer";
import logger from "./middleware/logger";
import throttle from "./middleware/throttle";
import stateValidation from "./middleware/state-validation";

const rootReducer = combineReducers({
  timer: timerReducer,
  posts: postsReducer,
});

const enhancer = applyMiddleware(stateValidation, throttle, logger);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
