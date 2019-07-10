import { createSelector } from "reselect";
import orderBy from "lodash/orderBy";

const getTasks = state => state.todos.tasks;

export const getSortedTasks = createSelector(
  [getTasks],
  tasks => orderBy(tasks, ["name"], ["desc"])
);
