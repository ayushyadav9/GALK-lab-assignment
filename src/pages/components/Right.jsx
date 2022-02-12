import React from 'react'
import styled from 'styled-components'
import { DeleteOutlined } from "@ant-design/icons/lib/icons";

const Right = ({handelCompleted,handelDelete,completedTask,notCompletedTask}) => {

  return (
    <Div className="dashboard-right">
      <div className="right-list">
        <div className="right-top">
          <h3 className="right-list-h3">Your Tasks</h3>
        </div>
        <div className="full-flex">
          <div className="list-flex">
            <h4>Remaining Tasks</h4>
              {notCompletedTask.length > 0 &&
              notCompletedTask.map((item, i) => {
                return (
                  <Task key={i} >
                    <div
                      className={`list-item-value ${
                        item.completed ? "completed" : ""
                      }`}
                      onClick={() => handelCompleted(item.title,false)}
                    >
                      {item.title}
                    </div>
                    <div
                      className="list-item-remove"
                      onClick={() => handelDelete(item.title,false)}
                    >
                      <DeleteOutlined />
                    </div>
                  </Task>
                );
              })}
          </div>
          <div class="outer">
            <div class="inner"></div>
          </div>
          <div className="list-flex">
            <h4>Completed Tasks</h4>
              {completedTask.length > 0 &&
              completedTask.map((item, i) => {
                return (
                  <Task key ={i} >
                    <div
                      className={`list-item-value ${
                        item.completed ? "completed" : ""
                      }`}
                      onClick={() => handelCompleted(item.title,true)}
                    >
                      {item.title}
                    </div>
                    <div
                      className="list-item-remove"
                      
                    >
                      <DeleteOutlined  onClick={() => handelDelete(item.title,true)}/>
                    </div>
                  </Task>
                );
              })}
          </div>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  height: 100%;
  flex: 1;
  .task-add {
    padding: 7px 14px;
    outline: none;
    background: transparent;
    color: white;
    font-family: inherit;
    border: 1px solid #ffe6a7;
    font-size: 0.9em;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 15px;
  }
  .task-add:hover {
    background-color: #ffdf8f;
    color:black
  }
  .right-list {
    padding: 20px;
    height: 100%;
    overflow: scroll;
  }
  .right-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .right-list::-webkit-scrollbar {
    display: none;
  }
  .outer {
    width: 1px;
    height: 100%;
    margin: auto;
    position: absolute;
    overflow: hidden;
  }
  .inner {
    position: absolute;
    width: 100%;
    height: 67%;
    background: grey;
    top: 10%;
    box-shadow: 0px 0px 30px 20px grey;
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
  .full-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .list-flex {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .list-flex h4{
    color: #b8b8b8;
    margin-bottom: 1em;
    font-size: 1em;
    margin: 0 auto;
  }
`;

const Task = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  background-color: #1a171d;
  margin: 0.5rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85em;
  color: #fff;
  transition: all 0.4s ease-in-out;
  .completed {
    text-decoration: line-through;
    color: #cc0033;
  }
  .list-item:hover {
    background-color: #f7f7f7 1a;
    transition: all 0.4s ease-in-out;
  }
  .list-item-value {
    width: 250px;
  }
  .list-item-remove {
    display: flex;
  }
  .list-item-remove:hover {
    color: #ff4646;
    cursor: pointer;
  }
`;

export default Right