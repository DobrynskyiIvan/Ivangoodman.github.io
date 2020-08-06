import { generate as id } from "shortid";

export const defaultState = [
  { value: "Pants", id: id(), completed: false },
  { value: "Jacket", id: id(), completed: false },
  { value: "iPhone Charger", id: id(), completed: false },
  { value: "MacBook", id: id(), completed: false },
  { value: "Sleeping Pills", id: id(), completed: true },
  { value: "Underwear", id: id(), completed: false },
  { value: "Hat", id: id(), completed: false },
  { value: "T-Shirts", id: id(), completed: false },
  { value: "Belt", id: id(), completed: false },
  { value: "Passport", id: id(), completed: true },
  { value: "Sandwich", id: id(), completed: true }
];
