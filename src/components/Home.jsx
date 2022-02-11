import randomColor from 'randomcolor'
import React, { useState,useEffect } from 'react'
import './Home.css'

const Home = () => {
  const [tasks, setTasks] = useState([])
  const [currTask, setCurrTask] = useState({title:"",completed:false})
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
      setTasks(JSON.parse(localStorage.getItem("tasks")))
    }
  }, [])
  
  
  const handelAddTask = ()=>{
    if(currTask.title.length>=5){
      setCurrTask({title:""})
      let color = randomColor( {luminosity: 'dark',format: 'rgba'})
      let t=[{title:currTask.title, color:color, completed:true},...tasks]
      setTasks(t)
      localStorage.setItem("tasks",JSON.stringify(t))
    }
    else{
      seterror(true)
    }
  }

  const handelDelete=(idx)=>{
    let t= tasks;
    t.splice(idx,1)
    setTasks([...t]);
    localStorage.setItem("tasks",JSON.stringify([...t]))
  }

  const handelCompleted = (idx)=>{
    tasks[idx].completed = !tasks[idx].completed
    setTasks([...tasks])
    localStorage.setItem("tasks",JSON.stringify([...tasks]))
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
              value={currTask.title} onChange={(e)=>setCurrTask({...currTask,title:e.target.value})} 
              placeholder='Go to the gym...'
              />
              {error && <div class="error-message">Please enter atleast 5 letters</div>}
          </div>
          <button className="task-add" onClick={handelAddTask}>Add Task</button>
        </div>
      </div>
      <div className="dashboard-right">
        <div className="right-list">
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <h3 className="right-list-h3">Current Tasks</h3>
            <div style={{display:"flex"}}>
            <h4 className="right-list-h4">Show Completed List</h4>
            <input type="checkbox" hidden="hidden" id="username"/>
            <label class="switch" for="username"> </label>
            </div>
          </div>
          <div className="list-flex">
              {tasks.length>0 && tasks.map((item,i)=>{
                  return(
                    <div className="list-item" style={{backgroundColor:item.color}} key={i} onClick={()=>handelCompleted(i)}>
                      <div className={`list-item-value ${item.completed?"completed":""}`} >
                        {item.title}
                      </div>
                      <div className="list-item-remove" onClick={()=>handelDelete(i)}>
                        <img src="https://assets.codepen.io/2629920/delete.svg" alt=""/>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
        <span className="verify">
          <span className="verify-question">Sure you want to delete this task?</span>
          <span className="verify-btns">
            <span className="verify-btn" data-delete="yes">Yes</span>
            <span className="verify-btn" data-delete="No">No</span>
          </span>

        </span>
      </div>
    </div>
  )
}

export default Home