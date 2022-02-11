
import randomColor from 'randomcolor'
import React, { useState,useEffect } from 'react'
import './Home.css'
import Task from './Task'

const Home = () => {
  const [tasks, setTasks] = useState([])
  const [currTask, setCurrTask] = useState({title:"",completed:false})
  const [completedTask, setCompletedTask] = useState([])
  const [notCompletedTask, setNotCompletedTask] = useState([])
  const [listToShow, setListToShow] = useState(0) //0-All, 1-Completed, 2-Not Completed
  const [error, seterror] = useState(false)

  useEffect(() => {
    if(error){
      if(currTask.title.length>=5){
        seterror(false)
      }
    }
  }, [currTask,error])

  useEffect(() => {
    if(localStorage.getItem("tasks")){
      let t = JSON.parse(localStorage.getItem("tasks"))
      setTasks(t)
      let comp = t.filter(item => item.completed);
      let nComp = t.filter(item => !item.completed);
      setCompletedTask(comp)
      setNotCompletedTask(nComp)
    }
  }, [])
  
  
  const handelAddTask = ()=>{
    if(currTask.title.length>=5){
      setCurrTask({title:""})
      let color = randomColor( {luminosity: 'dark',format: 'rgba'})
      let t=[...tasks,{title:currTask.title, color:color, completed:false}]
      setTasks(t)
      localStorage.setItem("tasks",JSON.stringify(t))
    }
    else{
      seterror(true)
    }
  }

  const handelDelete=(delTitle)=>{
    let t= tasks.filter(item=>item.title!==delTitle);
    setTasks([...t]);
    setCompletedTask([...t.filter(item => item.completed)])
    setNotCompletedTask([...t.filter(item => !item.completed)])
    localStorage.setItem("tasks",JSON.stringify([...t]))
  }

  const handelCompleted = (comTitle)=>{
    for (let i = 0; i < tasks.length; i++) {
      if(tasks[i].title===comTitle) {
        tasks[i].completed=!tasks[i].completed
      }
    }
    setTasks([...tasks])
    localStorage.setItem("tasks",JSON.stringify([...tasks]))
    setCompletedTask([...tasks.filter(item => item.completed)])
    setNotCompletedTask([...tasks.filter(item => !item.completed)])
  }

  const handleKeypress = (e)=>{
    if (e.charCode === 13) {
      handelAddTask();
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="left-header">
          <h3>Create a task!</h3>
        </div>
        <div className="left-task">
          <div className="task-info task-item">
            <label htmlFor="" className="task-label">Task</label>
            <input 
              type="text" 
              className="task-info-input task-input" 
              onKeyPress={handleKeypress}
              value={currTask.title} 
              onChange={(e)=>setCurrTask({...currTask,title:e.target.value})} 
              placeholder='Go to the gym...'
              />
              {error && <div class="error-message">Please enter atleast 5 letters</div>}
          </div>
          <button className="task-add" onClick={handelAddTask}>Add Task</button>
          <button className="task-add" onClick={()=>setListToShow(2)}>Remove Completed Tasks</button>
        </div>
      </div>
      <div className="dashboard-right">
        <div className="right-list">
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <h3 className="right-list-h3">{listToShow===0?"All Tasks":listToShow===1?"Completed Tasks":"Not Completed Tasks"}</h3>
            <div style={{display:"flex"}}>
            <h4 className="right-list-h4">Show Completed List</h4>
            <input type="checkbox" hidden="hidden" onChange={()=>{setListToShow(listToShow!==1?1:0)}} id="username"/>
            <label className="switch" htmlFor="username" > </label>
            </div>
          </div>
          <div className="list-flex">
              {listToShow===0 && tasks.length>0 && tasks.map((item,i)=>{
                  return(
                    <Task key={i} item={item} handelCompleted={handelCompleted} handelDelete={handelDelete}/>
                  )
                })
              }
          </div>
          <div className="list-flex">
              {listToShow===1 && completedTask.length>0 && completedTask.map((item,i)=>{
                  return(
                    <Task key={i} item={item} handelCompleted={handelCompleted} handelDelete={handelDelete}/>
                  )
                })
              }
          </div>
          <div className="list-flex">
              {listToShow===2 && notCompletedTask.length>0 && notCompletedTask.map((item,i)=>{
                  return(
                    <Task key={i} item={item} handelCompleted={handelCompleted} handelDelete={handelDelete}/>
                  )
                })
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home