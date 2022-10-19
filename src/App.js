import React, { useState } from "react";
import "./App.css";
import Filter from "./Filter";
import SingleToDo from "./SingleToDo";


const dummyData = [{
  itemToDo: "Clean the house",
  timeDue: new Date().toLocaleString(),
  completed: false,
}, {
  itemToDo: "Mow the lawn",
  timeDue: new Date().toLocaleString(),
  completed: false,
}, {
  itemToDo: "Practice React",
  timeDue: new Date().toLocaleString(),
  completed: false,
}];

function App() {
  const [toDoData, setToDo] = useState(dummyData);
  const [filterStatus, setFilterStatus] = useState('all')

  return (
    <div className="App">
      <header className="App-header">
        <div>To-Do List</div>
      </header>
      <div className="App-body">
        <table className="toDoTable">
          <tbody>
            <tr>
              <th key="toDoHeader1" className="toDoHeader">To-Do</th>
              <th key="toDoHeader2" className="toDoHeader">Due</th>
              <th key="toDoHeader3" className="toDoHeader">Completed?</th>
            </tr>
            <SingleToDo filterStatus={filterStatus} toDoData={toDoData} setToDo={setToDo} />
          </tbody>
        </table>
        <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
      </div>
    </div>
  );
}

export default App;
