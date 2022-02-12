import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Left from "./components/Left";
import Right from "./components/Right";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [currTask, setCurrTask] = useState({ title: "", completed: false });
  const [completedTask, setCompletedTask] = useState([]);
  const [notCompletedTask, setNotCompletedTask] = useState([]);
  const [listToShow, setListToShow] = useState(0); //0-All, 1-Completed, 2-Not Completed
  const [error, seterror] = useState(false);

  useEffect(() => {
    if (error) {
      if (currTask.title.length >= 5) {
        seterror(false);
      }
    }
  }, [currTask, error]);

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      let t = JSON.parse(localStorage.getItem("tasks"));
      setTasks(t);
      let comp = t.filter((item) => item.completed);
      let nComp = t.filter((item) => !item.completed);
      setCompletedTask(comp);
      setNotCompletedTask(nComp);
    }
  }, []);

  const handelAddTask = () => {
    if (currTask.title.length >= 5) {
      setCurrTask({ title: "" });
      let t = [
        ...tasks,
        { title: currTask.title, completed: false },
      ];
      setTasks(t);
      localStorage.setItem("tasks", JSON.stringify(t));
    } else {
      seterror(true);
    }
  };

  const handelDelete = (delTitle) => {
    let t = tasks.filter((item) => item.title !== delTitle);
    setTasks([...t]);
    setCompletedTask([...t.filter((item) => item.completed)]);
    setNotCompletedTask([...t.filter((item) => !item.completed)]);
    localStorage.setItem("tasks", JSON.stringify([...t]));
  };

  const handelCompleted = (comTitle) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].title === comTitle) {
        tasks[i].completed = !tasks[i].completed;
      }
    }
    setTasks([...tasks]);
    localStorage.setItem("tasks", JSON.stringify([...tasks]));
    setCompletedTask([...tasks.filter((item) => item.completed)]);
    setNotCompletedTask([...tasks.filter((item) => !item.completed)]);
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handelAddTask();
    }
  };

  return (
    <Dashboard>
      <Left
        handleKeypress={handleKeypress}
        currTask={currTask}
        setCurrTask={setCurrTask}
        error={error}
        handelAddTask={handelAddTask}
        setListToShow={setListToShow}
      />
      <Right
        listToShow={listToShow}
        setListToShow={setListToShow}
        tasks={tasks}
        handelCompleted={handelCompleted}
        handelDelete={handelDelete}
        completedTask={completedTask}
        notCompletedTask={notCompletedTask}
      />
    </Dashboard>
  );
};

const Dashboard = styled.div`
  background-color: #0e0b11;
  height: 600px;
  width: 1100px;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  overflow: hidden;
`;

export default Home;
