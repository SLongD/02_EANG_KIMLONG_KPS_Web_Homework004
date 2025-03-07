import { EllipsisVertical } from "lucide-react";
import React from "react";
import { useState } from "react";
export default function CardComponent({ projectTask = []}){
  //const [progress, setProgress] = useState(projectTask.progress);
  return (
    <div className="grid grid-cols-2 justify-center items-center gap-10 h-[380px]">
        {projectTask?.map(({id, projectName, dueDate, progress, projectDescription }) => (
        <div key={id} className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 w-[325px]"
        >
          <div className="flex justify-between mb-5">
              {/* date */}
            <p className={`text-custom-sky-blue font-medium`}>{dueDate}</p>
            <EllipsisVertical size={20} color="#374957" />
          </div>

          <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {projectName}
          </h5>
          <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
              {projectDescription}
          </p>

            {/* progress bar */}
          <div className="w-full flex justify-between font-medium mb-1">
            <p>Progress</p>
            <p>{ progress}</p>
          </div>
          <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className={` ${(progress==100)? "bg-custom-sky-blue h-2.5 rounded-full": (progress ==75)? "bg-custom-carrot h-2.5 rounded-full w-3/4": 
              (progress == 50) ? "bg-custom-yellow-500 h-2.5 rounded-full w-2/4": (progress == 25)? "bg-custom-pink h-2.5 rounded-full w-1/4":""} `}>
            </div>
          </div>
            {/* deadline */}
          <div className="flex justify-end">
            <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg w-auto text-center">
            {(((Math.floor((new Date(dueDate) - Date.now()) / 86400000)) >= 7)? ((((Math.floor((new Date(dueDate) - Date.now()) / 86400000)) / 7) > 1) ? Math.floor(((Math.floor((new Date(dueDate) - Date.now()) / 86400000)) / 7)) + " weeks " +
            (((Math.floor((new Date(dueDate) - Date.now()) / 86400000) % 7) > 1) ?(Math.floor((new Date(dueDate) - Date.now()) / 86400000) % 7) + " days left": "1 day left"):
            Math.floor(((Math.floor((new Date(dueDate) - Date.now()) / 86400000)) / 7)) + " week " + (((Math.floor((new Date(dueDate) - Date.now()) / 86400000) % 7) > 1) ?(Math.floor((new Date(dueDate) - Date.now()) / 86400000) % 7) + " days left": "1 day left")) :
            (((Math.floor((new Date(dueDate) - Date.now()) / 86400000)) > 1)? Math.floor((new Date(dueDate) - Date.now()) / 86400000)+" days left": "1 day left"))} 
            </p>
          </div>
        </div>
        ))}
    </div>
  );
}
