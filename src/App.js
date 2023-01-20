import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import person from "reducers/person.js";
import { Card } from "components/Card";
import { OuterWrapper } from "components/GlobalStyles";

const reducer = combineReducers({
  person: person.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <OuterWrapper>
        <Card />
      </OuterWrapper>
    </Provider>
  );
};
