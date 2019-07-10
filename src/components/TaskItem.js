import React from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";
import "./TaskList.css";
import IconCheck from "../icons/IconCheck";
import IconRadioButtonUnchecked from "../icons/IconRadioButtonUnchecked";
import IconEdit from "../icons/IconEdit";
import IconDelete from "../icons/IconDelete";
import { toggleCheck, editTask, removeTask } from "../reducers/todos/actions";
import classNames from 'classnames'

export const TaskItem = ({ task, toggleCheck, editTask, removeTask }) => {
  const handleCheck = () => {
    toggleCheck(task.id);
  };

  const handleEdit = () => {
    editTask(task.id)
  }

  const handleRemove = () => {
    removeTask(task.id)
  }

  const itemClass = classNames('item', { completed: task.completed })

  return (
    <li className={itemClass}>
      <div className="check" onClick={handleCheck}>
        {task.completed ? <IconCheck /> : <IconRadioButtonUnchecked />}
      </div>
      <div className="title">{task.name}</div>
      <div className="edit" title="Edit" onClick={handleEdit}>
        <IconEdit />
      </div>
      <div className="remove" title="Remove" onClick={handleRemove}>
        <IconDelete />
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: object.isRequired,
  toggleCheck: func.isRequired,
  editTask: func.isRequired,
  removeTask: func.isRequired,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = { toggleCheck, editTask, removeTask };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskItem);
