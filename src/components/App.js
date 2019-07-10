import React from "react";
import AddTask from './AddTask'
import TaskList from './TaskList'
import "./App.css";

const App = () => (
  <div className="App">
    <div className="header">
      <h1>TODO LIST</h1>
      <AddTask/>
    </div>
    <TaskList/>
  </div>
);

export default App;
