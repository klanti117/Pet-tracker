import { useState, useEffect } from "react";

import AddPet from "./AddPet";
import ListPets from "./ListPets";
import "./index.css";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const res = await fetch("http://localhost:3100/pets");
      const data = await res.json();

      console.log(data);
    };
    fetchPets();
  }, []);

  //Add pets
  const addPet = (pet) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newPet = { id, ...pet };
    setPets([...pets, newPet]);
  };

  //Remove pets
  const removePet = (id) => {
    setPets(pets.filter((pet) => pet.id !== id));
  };

  return (
    <div className="">
      <h1>Pet Tracker</h1>
      <AddPet onAdd={addPet} />
      <h2>Pet List</h2>
      {pets.length > 0 ? (
        <ListPets pets={pets} onRemove={removePet} />
      ) : (
        "No pets to show"
      )}
    </div>
  );
}

export default App;
