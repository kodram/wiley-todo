import isEqual from 'lodash/isEqual'
import { saveLocalData } from './storage'

const select = (state) => state.todos.tasks

let store
let currentValue

export const initListener = (theStore) => {
  store = theStore
}

export const handleChange = () => {
  let previousValue = currentValue
  currentValue = select(store.getState())

  if (!isEqual(previousValue, currentValue)) {
    saveLocalData('tasks', currentValue)
  }
}
