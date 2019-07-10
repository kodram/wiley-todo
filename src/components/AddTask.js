import React from "react";
import { string, func } from "prop-types";

import { connect } from "react-redux";
import { changeNewTask, addTask } from "../reducers/todos/actions";

export const AddTask = ({ name, changeNewTask, addTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    addTask()
  }

  const handleChange = (event) => {
    changeNewTask(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} placeholder="What do you want to do?" />
      {' '}
      <input type="submit" value="Add" />
    </form>
  )
}

AddTask.propTypes = {
  name: string.isRequired,
  changeNewTask: func.isRequired,
  addTask: func.isRequired
};

const mapStateToProps = state => ({
  name: state.todos.newTask.name
});

const mapDispatchToProps = { changeNewTask, addTask };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
