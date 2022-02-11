import React from "react";
import { DeleteOutlined } from "@ant-design/icons/lib/icons";

const Task = (props) => {
  return (
    <div className="list-item">
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
    </div>
  );
};

export default Task;
