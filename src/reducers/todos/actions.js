import * as actionTypes from './constants'

export const init = (tasks) => ({ type: actionTypes.INIT, tasks })

export const addTask = () => ({ type: actionTypes.ADD_TASK })
export const changeNewTask = (name) => ({ type: actionTypes.CHANGE_NEW_TASK, name })

export const removeTask = (id) => ({ type: actionTypes.REMOVE_TASK, id })

export const toggleCheck = (id) => ({ type: actionTypes.TOGGLE_CHECK, id })

export const editTask = (id) => ({ type: actionTypes.EDIT_TASK, id })
export const changeEditTask = (name) => ({ type: actionTypes.CHANGE_EDIT_TASK, name })
export const cancelEditTask = () => ({ type: actionTypes.CANCEL_EDIT_TASK })
export const updateTask = () => ({ type: actionTypes.UPDATE_TASK })
