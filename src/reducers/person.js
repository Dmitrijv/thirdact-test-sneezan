/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const person = createSlice({
  name: "person",
  initialState: {
    items: [
      { id: "1", fullname: ["Karlsson", "Kalle"], name: "Kalle", surname: "Karlsson" },
      { id: "2", fullname: ["Andersson", "Anna"], name: "Anna", surname: "Andersson" },
    ],
    selectedPerson: {
      id: "",
      fullname: ["", ""],
      name: "",
      surname: "",
    },
  },

  reducers: {
    deleteItem: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload);
    },
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
    filterItem: (store, action) => {
      const updatedFilters = store.filters.map((filter) => {
        if (filter.id === action.payload) {
          return {
            ...filter,
            status: !filter.status,
          };
        } else {
          return filter;
        }
      });
      store.filters = updatedFilters;
    },
    editItem: (store, action) => {
      store.selectedPerson = action.payload;
    },
    toggledPerson: (store, action) => {
      store.selectedPerson = action.payload;
    },
  },
});
export default person;
