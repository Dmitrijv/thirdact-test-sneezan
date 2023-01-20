import React from "react";
import styled from "styled-components";
import { Filter } from "./Filter";
import { InputFields } from "./Input";
import { ListOfSubmits } from "./List";

export const Card = () => {
  return (
    <Frame>
      <Filter />
      <InputFields />
      <ListOfSubmits />
    </Frame>
  );
};

const Frame = styled.div`
  width: 600px;
  height: 400px;
  border: 2px solid black;
  display: flex;
`;
