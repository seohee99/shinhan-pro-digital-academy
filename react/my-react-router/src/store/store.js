import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todo";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import myMid from "./middlewares/myMiddleware";

const myMiddlewares = [logger, myMid];

const rootReducer = combineReducers({
  todo: todoReducer,
});

// export default createStore(rootReducer);
export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware().concat(myMiddlewares);
    console.log("middlewares",middlewares);
    return middlewares;
  },
});