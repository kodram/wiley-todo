import omit from "lodash/omit";
import * as actionTypes from "./constants";
import uuid from "uuid/v4";

const newTask = () => ({
  id: uuid(),
  name: "",
  completed: false
});

const initialState = {
  newTask: newTask(),
  editTask: null,
  tasks: {}
};

export default (state = initialState, action) => {
  const { type, id, name, tasks } = action;

  switch (type) {
    case actionTypes.INIT:
      return { ...initialState, tasks };

    case actionTypes.ADD_TASK:
      return {
        ...state,
        newTask: newTask(),
        tasks: { ...state.tasks, [state.newTask.id]: state.newTask }
      };

    case actionTypes.CHANGE_NEW_TASK:
      return { ...state, newTask: { ...state.newTask, name } };

    case actionTypes.REMOVE_TASK:
      return { ...state, tasks: omit(state.tasks, id) };

    case actionTypes.EDIT_TASK:
      return { ...state, editTask: { ...state.tasks[id] } };

    case actionTypes.CANCEL_EDIT_TASK:
      return { ...state, editTask: null };

    case actionTypes.CHANGE_EDIT_TASK:
      return { ...state, editTask: { ...state.editTask, name } };

    case actionTypes.UPDATE_TASK:
      return {
        ...state,
        editTask: null,
        tasks: { ...state.tasks, [state.editTask.id]: state.editTask }
      };

    case actionTypes.TOGGLE_CHECK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [id]: { ...state.tasks[id], completed: !state.tasks[id].completed }
        }
      };

    default:
      return state;
  }
};
