import React from "react";
import "./index.css";
import Pet from "./Pet";

const ListPets = ({ pets }) => {
  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <Pet key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default ListPets;
