/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: "personSlice",
  initialState: {
    people: [
      { id: "1", firstName: "Kalle", lastName: "Karlsson" },
      { id: "2", firstName: "Anna", lastName: "Andersson" },
    ],
    selectedPersonId: "",
    nameFilter: "",
  },

  reducers: {
    addPerson: (state, action) => {
      state.people = [...state.people, action.payload];
    },

    editPerson: (state, action) => {
      const personId = action.payload.id;
      const index = state.people.findIndex((p) => p.id === personId);
      if (index !== -1) {
        state.people[index] = action.payload;
      }
    },

    deletePerson: (state, action) => {
      const personId = action.payload;
      state.people = state.people.filter((person) => person.id !== personId);
    },

    setSelectedPersonId(state, action) {
      state.selectedPersonId = action.payload;
    },

    setNameFilter(state, action) {
      state.nameFilter = action.payload;
    },
  },
});

export const { getPerson, addPerson, editPerson, deletePerson, setSelectedPersonId, setNameFilter } =
  personSlice.actions;

export default personSlice.reducer;
