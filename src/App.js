import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { Filter } from "components/Filter";
import { TableOfSubmits } from "components/TableOfSubmits";
import { PersonInput } from "components/PersonInput";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { personSlice } from "./reducers/personSlice";

const reducer = combineReducers({
  personSlice: personSlice.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Frame>
        <Filter />
        <PersonWrap>
          <TableOfSubmits />
          <PersonInput />
        </PersonWrap>
      </Frame>
    </Provider>
  );
};

const Frame = styled.div`
  max-width: 650px;
  min-height: 600px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 6px;
  box-shadow: rgb(149 157 165 / 15%) 0px 3px 6px 0px;
  background-color: white;
`;

const PersonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
