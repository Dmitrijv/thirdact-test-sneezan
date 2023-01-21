import React, { useState, useEffect } from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import { useSelector, useDispatch } from "react-redux";
import { editPerson, addPerson, setSelectedPersonId, deletePerson } from "../reducers/personSlice";

export const PersonInput = () => {
  const dispatch = useDispatch();

  const selectedId = useSelector((state) => state.personSlice.selectedPersonId);
  const people = useSelector((state) => state.personSlice.people);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (selectedId) {
      const index = people.findIndex((p) => p.id === selectedId);
      if (index !== -1) {
        setFirstName(people[index].firstName);
        setLastName(people[index].lastName);
      }
    } else {
      setFirstName("");
      setLastName("");
    }
  }, [selectedId, people]);

  const submitPerson = (event) => {
    event?.preventDefault();

    // Updating existing person.
    if (selectedId) {
      const updatedPerson = {
        id: selectedId,
        firstName,
        lastName,
      };
      dispatch(editPerson(updatedPerson));
      // Creating a new Person.
    } else {
      const newPerson = {
        id: uniqid(),
        firstName,
        lastName,
      };
      dispatch(addPerson(newPerson));
    }

    // Clear input fields after submit.
    setFirstName("");
    setLastName("");
  };

  const onDeleteClick = () => {
    dispatch(deletePerson(selectedId));
    dispatch(setSelectedPersonId(""));
    setFirstName("");
    setLastName("");
  };

  return (
    <PersonForm onSubmit={(e) => submitPerson(e)}>
      {/* First name */}
      <label htmlFor="firstName">
        <input
          type="text"
          name="firstName"
          autoComplete="off"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      {/* Last name */}
      <label htmlFor="lastName">
        <input
          type="text"
          name="lastName"
          autoComplete="off"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>

      {/* Buttons */}
      <ButtonWrap>
        {/* Create */}
        {!selectedId && <button type="submit">Create</button>}

        {selectedId && (
          <>
            {/* Update */}
            <button type="submit">Update</button>
            {/* Delete */}
            <button type="button" onClick={() => onDeleteClick()}>
              Delete
            </button>
            {/* Cancel */}
            <button type="button" onClick={() => dispatch(setSelectedPersonId(""))}>
              Cancel
            </button>
          </>
        )}
      </ButtonWrap>
    </PersonForm>
  );
};
const PersonForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-left: 10px;

  label + label {
    margin-top: 6px;
  }

  label input {
    width: 100%;
    padding: 12px;
    border: 0px;
    background-color: #ecf1e6;
    transition: box-shadow 0.1s ease-in-out;

    &:focus {
      outline: 1px solid #bbc3b1;
      outline-offset: 1px;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  button {
    width: 100%;
    padding: 4px;
    cursor: pointer;
    pointer-events: all;
  }

  button + button {
    margin-left: 10px;
  }
`;
