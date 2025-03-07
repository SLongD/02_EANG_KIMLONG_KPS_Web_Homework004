import React from "react";
import { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials} from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [isFavorites, setIsFavorites] = useState({});
  const handleStarClick = (id) => {
    setIsFavorites((prevIsFavorites) => ({
      ...prevIsFavorites,
      [id]: !prevIsFavorites[id],
    }));
  };

  const [items, setItems] = useState(learningMaterials);

  // Function to handle sorting based on the selected option
  const handleSortChange = (sortOption) => {
    const sortedItems = [...learningMaterials].sort((a, b) => {
      if (sortOption === "A-Z") {
        return a.title.localeCompare(b.title); // Sort A-Z
      } else if (sortOption === "Z-A") {
        return b.title.localeCompare(a.title); // Sort Z-A
      }
      return 0; // No sorting
    });
    setItems(sortedItems); // Update the state with sorted items
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent onSortChange={handleSortChange}/>

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3 ">
        {items.map((learningMaterial) => (
          <div key={learningMaterial.id} className="bg-light-gray px-4 py-2 flex gap-5 items-center">
          <img
            src={learningMaterial.image}
          alt={learningMaterial.title}
            width={50}
            height={50}
            className="rounded-xl"
          />

          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-base font-medium">{learningMaterial.title}</p>
              <Star size={20} className={`cursor-pointer ${
                    isFavorites[learningMaterial.id] ? "text-amber-300 fill-current" : "text-gray-400"}`}
                  onClick={() => handleStarClick(learningMaterial.id)}/>
            </div>
            <p className="text-gray-400 text-sm">{learningMaterial.postedAt}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
