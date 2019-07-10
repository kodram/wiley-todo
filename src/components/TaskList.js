import React from "react";
import { arrayOf, object } from "prop-types";
import { connect } from "react-redux";
import { getSortedTasks } from "../selectors/tasks";
import TaskItem from "./TaskItem";
import TaskEdit from "./TaskEdit";
import "./TaskList.css";

export const AddTask = ({ tasks, editTask }) => {
  return (
    <ul className="list">
      {tasks.map(task =>
        editTask && editTask.id === task.id ? (
          <TaskEdit key={task.id} />
        ) : (
          <TaskItem key={task.id} task={task} />
        )
      )}
    </ul>
  );
};

AddTask.propTypes = {
  tasks: arrayOf(object).isRequired,
  editTask: object
};

const mapStateToProps = state => ({
  tasks: getSortedTasks(state),
  editTask: state.todos.editTask
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
