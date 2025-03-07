import React from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent() {
  return (
    <div> 
      {/* display summary on each card */}
      <div className="">
        <div className="flex w-auto gap-5">
        {dashboard.map((item) => (
          <div key={item.id} className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-[250px]">
            <div className={`p-3 rounded-xl ${item.color} bg-custom-pink`}>
              <img src={item.icon} alt="file icon"/>
            </div>
            <div>
              <p className="text-xl font-semibold">{item.totalTasks}</p>
              <p className="text-gray-400">{item.label}</p>
            </div>
          </div>
       
        ))}
        </div>
      </div>

    </div>
  );
}
