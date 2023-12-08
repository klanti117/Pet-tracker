import { useState, useEffect } from "react";

import AddPet from "./AddPet";
import ListPets from "./ListPets";
import "./index.css";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      const petsFromServer = await fetchPets();
      setPets(petsFromServer);
    };
    getPets();
  }, []);

  // Fetch Pets
  const fetchPets = async () => {
    const res = await fetch("http://localhost:3100/pets");
    const data = await res.json();
    return data;
  };

  //Add pets
  const addPet = (pet) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newPet = { id, ...pet };
    setPets([...pets, newPet]);
  };

  //Remove pets
  const removePet = async (id) => {
    await fetch(`http://localhost:3100/pets/${id}`, {
      method: "DELETE",
    });
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
