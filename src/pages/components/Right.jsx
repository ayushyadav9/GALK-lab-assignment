import React from 'react'
import Task from './Task'
import styled from 'styled-components'

const Right = ({listToShow,setListToShow,tasks,handelCompleted,handelDelete,completedTask,notCompletedTask}) => {
  return (
    <Div className="dashboard-right">
      <div className="right-list">
        <div className="right-top">
          <h3 className="right-list-h3">
            {listToShow === 0
              ? "All Tasks"
              : listToShow === 1
              ? "Completed Tasks"
              : "Not Completed Tasks"}
          </h3>
          <div style={{ display: "flex" }}>
            <h4 className="right-list-h4">Show Completed List</h4>
            <input
              type="checkbox"
              hidden="hidden"
              onChange={() => {setListToShow(listToShow !== 1 ? 1 : 0)}}
              id="username"
            />
            <label className="switch" htmlFor="username">{" "}</label>
          </div>
        </div>
        <div className="list-flex">
          {listToShow === 0 &&
            tasks.length > 0 &&
            tasks.map((item, i) => {
              return (
                <Task
                  key={i}
                  item={item}
                  handelCompleted={handelCompleted}
                  handelDelete={handelDelete}
                />
              );
            })}
        </div>
        <div className="list-flex">
          {listToShow === 1 &&
            completedTask.length > 0 &&
            completedTask.map((item, i) => {
              return (
                <Task
                  key={i}
                  item={item}
                  handelCompleted={handelCompleted}
                  handelDelete={handelDelete}
                />
              );
            })}
        </div>
        <div className="list-flex">
          {listToShow === 2 &&
            notCompletedTask.length > 0 &&
            notCompletedTask.map((item, i) => {
              return (
                <Task
                  key={i}
                  item={item}
                  handelCompleted={handelCompleted}
                  handelDelete={handelDelete}
                />
              );
            })}
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  height: 100%;
  flex: 1;
  .right-list {
    padding: 20px;
    height: 100%;
    overflow: scroll;
  }
  .right-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .right-list::-webkit-scrollbar {
    display: none;
  }
  .right-list h3 {
    color: #b8b8b8;
    margin-bottom: 1em;
    font-size: 1em;
  }
  .right-list h4 {
    color: #b8b8b8;
    margin-top: -2px;
    margin-right: 1em;
    margin-bottom: 1em;
    font-size: 0.8em;
  }
  .list-flex {
    display: flex;
    flex-direction: column;
  }

  .switch {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 16px;
    border-radius: 20px;
    margin-bottom: 1em;
    background: #dfd9ea;
    transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    vertical-align: middle;
    cursor: pointer;
  }
  .switch::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 2px;
    width: 15px;
    height: 15px;
    background: #fafafa;
    border-radius: 50%;
    transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .switch:active::before {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28),
      0 0 0 20px rgba(128, 128, 128, 0.1);
  }
  input:checked + .switch {
    background: #72da67;
  }
  input:checked + .switch::before {
    left: 14px;
    background: #fff;
  }
  input:checked + .switch:active::before {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(0, 150, 136, 0.2);
  }
`;

export default Right