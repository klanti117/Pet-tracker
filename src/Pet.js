import React from "react";

const Pet = ({ pet, onRemove }) => {
  return (
    <div>
      <h3>{pet.petName}</h3>
      <img src={pet.profilePicture} alt="my pet" />
      <p>{pet.isFriendly ? "Friendly!" : "Not so friendly..."}</p>
      <p>Species: {pet.species}</p>
      <button onClick={() => onRemove(pet.id)}>Remove</button>
    </div>
  );
};

export default Pet;
