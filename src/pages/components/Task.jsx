import React from "react";
import styled from "styled-components";
import { DeleteOutlined } from "@ant-design/icons/lib/icons";

const Task = (props) => {
  return (
    <Div>
      <div
        className={`list-item-value ${props.item.completed ? "completed" : ""}`}
        onClick={() => props.handelCompleted(props.item.title)}
      >
        {props.item.title}
      </div>
      <div
        className="list-item-remove"
        onClick={() => props.handelDelete(props.item.title)}
      >
        <DeleteOutlined />
      </div>
    </Div>
  );
};

const Div = styled.div`
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
export default Task;
