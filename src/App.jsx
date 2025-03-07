import "./App.css";
import { useState } from "react";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import CardComponent from "./components/CardComponent";


function App() {
  const [projectTask, setProjectTask] = useState([
    
  ]);
  const [filteredTasks, setFilteredTasks] = useState(projectTask);
  const handleSubmitTask = (task) => {
    const newTask = { ...task, id: Date.now() }; // Add a unique ID to the new task
    const updatedTasks = [...projectTask, newTask];
    setProjectTask(updatedTasks); // Update the main task list
    setFilteredTasks(updatedTasks); // Update the filtered task list to include the new task
  };
  

  const handleSearch = (search) => {
    const filtered = projectTask.filter((task) =>
      task.projectName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTasks(filtered);
  };
  
  
  return (
    <section className="flex flex-row gap-x-10 bg-light-gray">
      {/* sidebar */}
      <div className="w-[290px] bg-custom-sky-blue dark:bg-custom-sky-blue-dark">
        <SidebarComponent/>
      </div>
      
      <div className="bg-light-gray mt-5">
        <div className="w-auto ">
          <TopNavbarComponent projectTask={projectTask} onSearch={handleSearch}/>
        </div>
        
        <div className="flex gap-6 mt-10">
          <div className="w-[840px] bg-light-gray dark:bg-gray-800 flex flex-col gap-y-7">
          <h2 className="text-xl font-semibold mb-5 sticky">Dashboard</h2>
            <div className="flex flex-row justify-between overflow-x-auto">
              <DashboardComponent/>
            </div>
            <div className="flex flex-row justify-between mt-5">
              <AssignmentsComponent/>
              <AddNewProjectComponent handleSubmitTask={handleSubmitTask}/>
            </div>
            <div className="overflow-auto h-[380px] flex justify-center items-center"> 
              <CardComponent projectTask={filteredTasks}/> 
            </div>
            
          </div>
          <div className="w-[300px]">
            <LearningMaterialsComponent/>   
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
