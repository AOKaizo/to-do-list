import React, { useState } from "react";

const SingleToDo = ({ filterStatus, toDoData, setToDo }) => {
  return toDoData.map((datum) => {
    let { itemToDo, timeDue, completed } = datum;
    const [completeState, setComplete] = useState(completed);

    const retData = (
      <tr className="toDoRow">
        <td key={"toDoItem1"} className="toDoItem">
          {completeState ? <strike>{itemToDo}</strike> : itemToDo}
        </td>
        <td key={"toDoItem2"} className="toDoItem">
          {completeState
            ? `Completed: ${new Date().toLocaleString()}`
            : timeDue}
        </td>
        <td
          key={"toDoItem3"}
          className="toDoItem"
          onClick={() => {
            setComplete(!completeState);
          }}
        >
          {completeState ? "Completed" : "In-progress"}
        </td>
      </tr>
    );

    return filterStatus === "all"
      ? retData
      : filterStatus === "active" && completeState === false
      ? retData
      : filterStatus === "completed" && completeState === true
      ? retData
      : null;
  });
};

export default SingleToDo;
