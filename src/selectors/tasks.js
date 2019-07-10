import { createSelector } from "reselect";
import sortBy from "lodash/sortBy";

const getTasks = state => state.todos.tasks;

export const getSortedTasks = createSelector(
  [getTasks],
  tasks => sortBy(tasks, ["name"])
);
