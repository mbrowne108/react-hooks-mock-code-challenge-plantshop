import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantList ({ searchText }) {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
  },[plants.length])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleSearch(searchText) {
    setSearch(searchText.toLowerCase())
  }

  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <ul className="cards">5
        {plants.map(plant => {
          {if (plant.name.toLowerCase().includes(search) || search === "") {
            return (
              <PlantCard 
                id={plant.id}
                name={plant.name}
                image={plant.image}
                price={plant.price}/>
            )
          } else {return console.log("wtf")}
          }
        })}
      </ul>
    </div>
  )
}


export default PlantList;
