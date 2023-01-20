import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import person from "reducers/person";
import { OuterWrapper } from "./GlobalStyles";

export const ListOfSubmits = () => {
  const items = useSelector((store) => store.person.items);
  const [selectedPerson, setSelectedPerson] = useState("");

  const dispatch = useDispatch();

  const handleSelectPersonToggle = (personId) => {
    if (selectedPerson === personId) {
      setSelectedPerson("");
      dispatch(person.actions.toggledPerson(selectedPerson));
    } else {
      setSelectedPerson(personId);
    }
  };
  console.log(dispatch(person.actions.toggledPerson(selectedPerson)));

  return (
    <Wrapper>
      <InnerWrapper>
        <section>
          {items.map((singleUser) => {
            return (
              <ClickableList>
                {/* <StyledCheckbox
                  type="checkbox"
                  checked={singleUser.toggled}
                  onChange={() => onCompletedToggle(`${singleUser.id}`)} /> */}

                <List
                  onClick={() => {
                    handleSelectPersonToggle(singleUser.fullname);
                  }}
                  className={selectedPerson === singleUser.fullname ? "toggle-person" : ""}
                >
                  {`${singleUser.fullname}`}
                </List>
                <DeleteWrap>
                  <button type="button" onClick={() => dispatch(person.actions.deleteItem(singleUser.id))}>
                    {" "}
                    delete
                  </button>
                </DeleteWrap>
              </ClickableList>
            );
          })}
        </section>
      </InnerWrapper>
    </Wrapper>
  );
};

/* <div onClick={() => editTodo(idx)}>{selected === idx ? text : todo}</div> */

const Wrapper = styled(OuterWrapper)`
  display: flex;
  position: relative;
`;

const InnerWrapper = styled.div`
  display: flex;
  position: absolute;
  left: -110px;
  top: 100px;
  border: 2px solid red;
  height: 110px;
`;

const List = styled.li`
  list-style-type: none;
  &.toggle-person {
    background-color: lightblue;
  }
`;
const ClickableList = styled.div`
  cursor: pointer;
  width: 190px;
  height: 25px;
  display: grid;
  &:focus {
    background-color: lightblue;
  }
`;
const DeleteWrap = styled.div`
  display: flex;
  width: 40px;
  position: relative;
  left: 210px;
  top: -20px;
`;

// const StyledCheckbox = styled.input`
//   appearance: none;
//   color: black;
//   height: 1em;
//   width: 3rem;
//   border: none;
//   place-content: center;
//   position: absolute;
// `
