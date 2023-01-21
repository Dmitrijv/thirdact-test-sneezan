import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPersonId } from "../reducers/personSlice";

export const TableOfSubmits = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.personSlice.people);
  const filter = useSelector((state) => state.personSlice.nameFilter);
  const selectedPersonId = useSelector((state) => state.personSlice.selectedPersonId);

  const onPersonClick = (personId) => {
    dispatch(setSelectedPersonId(personId));
  };

  return (
    <PersonTable role="grid">
      <tbody>
        {people
          .filter((p) => !filter || p.firstName.includes(filter) || p.lastName.includes(filter))
          .map((p) => {
            return (
              <tr key={p.id}>
                <td
                  role="gridcell"
                  className={selectedPersonId === p.id ? "selected-cell" : ""}
                  onClick={() => onPersonClick(p.id)}
                >
                  {p.firstName}, {p.lastName}
                </td>
              </tr>
            );
          })}
      </tbody>
    </PersonTable>
  );
};

const PersonTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr,td {
    display: flex;
    align-items: center;
    width: 100%;
  }

  tr + tr {
    margin-top: 1px;
  }

  td[role="gridcell"] {
    padding 8px;
    cursor: pointer;

    &:hover {
      background-color: whitesmoke;
    }
    
    &.selected-cell {
      background-color: lightblue;
    }
  }
`;
