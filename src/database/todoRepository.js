import { saveData } from "../helpers/saveData.js";
import todos from "./todos.json" assert { type: "json" };
import { v4 as uuidv4 } from "uuid";

export const getAll = () => {
  return todos;
};

export const addOne = (todo) => {
  todo.id = uuidv4();
  todo.isCompleted = false;
  let data = [...todos, todo];
  saveData(data);
  return todo;
};

export const updateList = (arrIds, isComplete = false) => {
  const data = [...todos].map((todo) => {
    if (arrIds.includes(todo.id)) {
      if (isComplete) {
        todo.isCompleted = true;
      } else {
        todo.isCompleted = !todo.isCompleted;
      }
    }
    return todo;
  });
  saveData(data);
};

export const deleteManyData = (arrId) => {
  const data = todos.filter((todo) => !arrId.includes(todo.id));
  saveData(data);
};
