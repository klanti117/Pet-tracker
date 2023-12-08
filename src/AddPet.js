import React from "react";

const AddPet = () => {
  return (
    <form>
      <h2>Add a new Pet!</h2>
      <label>
        Pet name <span style={requiredFields}>*</span>:
        <input type="text" name="name" required />
      </label>
      <label>
        Profile picture<span style={requiredFields}>*</span>
        <input
          type="text"
          name="profile picture"
          placeholder="Picture URL"
          required
        />
      </label>
      <fieldset>
        <legend>
          Species<span style={requiredFields}>*</span>
        </legend>
        <label>
          <input type="radio" name="species" value="cat" required />
          Cat
        </label>
        <br />
        <label>
          <input type="radio" name="species" value="dog" required />
          Dog
        </label>
        <br />
        <label>
          <input type="radio" name="species" value="bird" required />
          Bird
        </label>
        <br />
      </fieldset>
      <label>
        <input type="checkbox" /> <span>Are They Friendly?</span>
      </label>
      <input type="submit" value="Add Pet!" />
    </form>
  );
};

const requiredFields = {
  color: "red",
};

export default AddPet;
