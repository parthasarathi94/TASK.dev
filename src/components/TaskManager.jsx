import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Lottie from 'lottie-react';
import nothing from '../assets/nothing.json';

const TaskManager = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showFinished, setShowFinished] = useState(false);

  useEffect(() => {
    let taskString = localStorage.getItem("tasks");
    if (taskString) {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(tasks);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (!isFirstRender.current) {
      saveToLS();
    }
    isFirstRender.current = false;
  }, [tasks]);

  const handleAdd = () => {
    setTasks([...tasks, { id: uuidv4(), task, isCompleted: false }]);
    setTask("");
    saveToLS();
  };

  const handleEdit = (e, id) => {
    let t = tasks.filter(item => item.id === id);
    setTask(t[0].task);
    let newTasks = tasks.filter(item => item.id !== id);
    setTasks(newTasks);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTasks = tasks.filter(item => item.id !== id);
    setTasks(newTasks);
    saveToLS();
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = tasks.findIndex(item => item.id === id);
    let newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
    saveToLS();
  };

  return (
    <div className="mx-3 md:container md:mx-auto my-5 p-5 rounded-xl bg-purple-200 min-h-screen md:w-1/2">
      <h1 className='font-mono font-bold text-center text-3xl'>TASK.dev -- Your Daily Task Planner</h1>
      <div className="addTask my-5 flex flex-col gap-4">
        <h2 className='font-mono text-lg font-bold'>Add a Task</h2>
        <input onChange={handleChange} value={task} className='bg-white w-full rounded-md' type="text" />
        <button onClick={handleAdd} disabled={task.length < 1} className='bg-violet-500 hover:bg-violet-700 active:bg-violet-900 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-md p-2 py-1 text-sm font-mono font-semibold'>Add</button>
      </div>
      <input className='my-4' onChange={() => setShowFinished(!showFinished)} type="checkbox" checked={showFinished} /> View finished tasks
      <div className="h-1 bg-violet-700 opacity-20 w-[90%] mx-auto my-3 rounded-md"></div>
      <h2 className='font-mono text-lg font-bold'>Your Tasks :</h2>
      <div className="tasks">
        {tasks.length === 0 && <div className='m-5 font-semibold font-style: italic flex flex-col gap-5 justify-center items-center'><Lottie loop={true} animationData={nothing} /> No unfinished task to display</div>}
        {tasks.map(item => (showFinished || !item.isCompleted) && <div key={item.id} className="task flex my-3 justify-between">
          <div className='flex gap-5'>
            <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
            <div className={item.isCompleted ? "line-through" : ""}>{item.task}</div>
          </div>
          <div className="buttons flex h-full">
            <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-500 hover:bg-violet-700 active:bg-violet-900 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-md p-2 py-1 mx-2 text-sm'><FaRegEdit /></button>
            <button onClick={(e) => handleDelete(e, item.id)} className='bg-violet-500 hover:bg-violet-700 active:bg-violet-900 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-md p-2 py-1 mx-2 text-sm'><MdDelete /></button>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default TaskManager;
