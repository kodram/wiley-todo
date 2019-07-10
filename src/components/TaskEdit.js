import React from "react";
import { string, func } from "prop-types";
import { connect } from "react-redux";
import "./TaskList.css";
import { changeEditTask, cancelEditTask, updateTask } from "../reducers/todos/actions";

export const TaskEdit = ({ name, changeEditTask, cancelEditTask, updateTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    updateTask()
  }

  const handleChange = (event) => {
    changeEditTask(event.target.value)
  }

  return (
    <li className="item">
      <form className="form" onSubmit={handleSubmit}>
        <input autoFocus className="field" type="text" value={name} onChange={handleChange} />
        <input className="button" type="submit" value="Save" />
        <button className="button" onClick={cancelEditTask}>Cancel</button>
      </form>
    </li>
  );
};

TaskEdit.propTypes = {
  name: string.isRequired,
  changeEditTask: func.isRequired,
  cancelEditTask: func.isRequired,
  updateTask: func.isRequired,
};

const mapStateToProps = state => ({
  name: state.todos.editTask.name,
});

const mapDispatchToProps = { changeEditTask, cancelEditTask, updateTask };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskEdit);
