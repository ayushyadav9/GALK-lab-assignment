import React from "react";
import styled from "styled-components";

const Left = ({
  handleKeypress,
  currTask,
  setCurrTask,
  error,
  handelAddTask,
  handelRemove,
  notCompletedTask,
}) => {
  return (
    <Div>
      <div className="left-header">
        <h3>Create a task!</h3>
      </div>
      <div className="left-task">
        <div className="task-info task-item">
          <label htmlFor="" className="task-label">
            Task
          </label>
          <input
            type="text"
            className="task-info-input task-input"
            onKeyPress={handleKeypress}
            value={currTask.title}
            onChange={(e) =>
              setCurrTask({ ...currTask, title: e.target.value })
            }
            placeholder="Go to the gym..."
          />
          {error && (
            <div class="error-message">Please enter atleast 5 letters</div>
          )}
        </div>
        <button className="task-add" onClick={handelAddTask}>
          Add Task
        </button>
        {notCompletedTask.length > 0 &&
          notCompletedTask.filter((i) => i.completed).length > 0 && (
            <button className="task-add2" onClick={() => handelRemove()}>
              Remove Completed Tasks
            </button>
          )}
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 35%;
  min-width: 344px;
  padding: 25px;
  background-color: #1a171d;

  .left-header h3 {
    color: #f8f8f8;
    font-size: 1.3em;
  }
  .left-task {
    display: flex;
    flex-direction: column;
  }
  .task-input {
    padding: 12px 15px;
    background-color: #f7f7f726;
    font-family: inherit;
    border: none;
    border-radius: 2px;
    color: #b8b8b8;
    margin-bottom: 0.5em;
    transition: all 0.4s ease-in-out;
  }
  .task-input:focus {
    transition: all 0.4s ease-in-out;
    background-color: #fff;
    color: #1a171d;
  }
  .task-label {
    color: #d2cfcf;
    font-family: inherit;
    font-size: 0.8em;
    margin-bottom: 0.3em;
  }
  .task-item {
    margin: 1em 0;
    display: flex;
    flex-direction: column;
  }
  .task-add {
    padding: 10px;
    outline: none;
    background: #ffe6a7;
    font-family: inherit;
    border: none;
    font-size: 0.9em;
    border-radius: 2px;
    cursor: pointer;
    margin-top: 5px;
  }
  .task-add:hover {
    background-color: #ffdf8f;
  }

  .task-add2 {
    padding: 10px;
    outline: none;
    background: transparent;
    color: white;
    font-family: inherit;
    border: 1px solid #ffe6a7;
    font-size: 0.9em;
    border-radius: 2px;
    cursor: pointer;
    margin-top: 15px;
  }
  .task-add2:hover {
    background-color: #ffdf8f;
    color: black;
  }
  .error-message {
    color: #cc0033;
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    margin: 5px 0 0;
  }
`;

export default Left;
