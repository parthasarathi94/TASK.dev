import { useState, useEffect,useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsEmojiSmileFill } from "react-icons/bs";
import nothing from './assets/nothing.json'
import Lottie from 'lottie-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path:"/contact",
      element: <><Navbar/><Contact/></>
    }
  ])

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [showFinished, setshowFinished] = useState(false)

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  

  useEffect(() => {
    let taskString = localStorage.getItem("tasks")
    if (taskString) {
      let tasK = JSON.parse(localStorage.getItem("tasks"))
      setTasks(tasK)
    }
  }, [])


  const saveToLS = (params) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  // Save tasks to localStorage whenever tasks state changes (excluding initial render)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (!isFirstRender.current) {
      saveToLS();
    }
    isFirstRender.current = false;
  }, [tasks])

  const handleAdd = () => {
    setTasks([...tasks, { id: uuidv4(), task, isCompleted: false }])
    setTask("")
    saveToLS();
  }

  const handleEdit = (e, id) => {
    let t = tasks.filter(item => {
      return item.id === id;
    })
    setTask(t[0].task)

    let newTasks = tasks.filter(item => {
      return item.id !== id;
    })
    setTasks(newTasks);

    saveToLS();
  }

  const handleDelete = (e, id) => {
    let newTasks = tasks.filter(item => {
      return item.id !== id;
    })
    setTasks(newTasks);

    saveToLS();
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(`The id is: ${id}`)
    let index = tasks.findIndex(item => {
      return item.id === id;
    })
    let newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);

    saveToLS();
  }

  return (
    <>
      <RouterProvider router={router}/>
      <div className="mx-3 md:container md:mx-auto my-5 p-5 rounded-xl bg-purple-200 min-h-screen md:w-1/2">
        <h1 className='font-mono font-bold text-center text-3xl'>TASK.Dev -- Your Daily Task Planner</h1>
        <div className="addTask my-5 flex flex-col gap-4">
          <h2 className='font-mono text-lg font-bold'>Add a Task</h2>
          <input onChange={handleChange} value={task} className='bg-white w-full rounded-md' type="text" />
          <button onClick={handleAdd}  disabled={task.length<1} className='bg-violet-500 hover:bg-violet-700 active:bg-violet-900 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-md p-2 py-1 text-sm font-mono font-semibold'>Add</button>
        </div>
        <input className='my-4' onChange={toggleFinished} type="checkbox" checked={showFinished}/> View finished tasks
        <div className="h-1 bg-violet-700 opacity-20 w-[90%] mx-auto my-3 rounded-md"></div>
        <h2 className='font-mono text-lg font-bold'>Your Tasks :</h2>
        <div className="tasks">
          {tasks.length === 0 && <div className='m-5 font-semibold font-style: italic flex flex-col gap-5 justify-center items-center'><Lottie loop={true} animationData={nothing}/> No unfinished task to display</div>}
          {tasks.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="task flex my-3 justify-between">
              <div className='flex gap-5'>
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.task}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-violet-500 hover:bg-violet-700 active:bg-violet-900 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-md p-2 py-1 mx-2 text-sm'><FaRegEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-500 hover:bg-violet-700 active:bg-violet-900 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-md p-2 py-1 mx-2 text-sm'><MdDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
