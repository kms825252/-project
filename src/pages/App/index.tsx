import React from "react";
import { Outlet } from "react-router-dom";
import * as Styled from "./index.styles";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "_reducers/message_reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const App = () => {
  const createStoreWithMIddleware = applyMiddleware(
    promiseMiddleware,
    ReduxThunk
  )(createStore);

  const store = createStore(
    Reducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware, ReduxThunk))
  );
  return (
    <Provider store={store}>
      <Styled.GlobalStyle />
      <Outlet />
    </Provider>
  );
};

export default App;
