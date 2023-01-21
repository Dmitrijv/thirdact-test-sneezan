import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setNameFilter } from "../reducers/personSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const submitSearch = (e) => {
    e?.preventDefault();
  };

  const onFilterUpdate = (newFilter) => {
    dispatch(setNameFilter(newFilter));
  };

  return (
    <SearchForm onSubmit={(e) => submitSearch(e)}>
      <input
        type="search"
        name="search"
        autoComplete="off"
        onChange={(e) => onFilterUpdate(e.target.value)}
        placeholder="Sök person"
      />
    </SearchForm>
  );
};

const SearchForm = styled.form`
  width: 100%;
  margin-bottom: 10px;

  input {
    width: 100%;
    padding: 10px 12px;
    border: 0px;
    background-color: #f7f7f7;
    transition: box-shadow 0.1s ease-in-out;

    &:focus {
      outline: 1px solid lightgray;
      outline-offset: 1px;
    }
  }
`;
