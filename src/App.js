import React, { useState } from 'react';
import './App.css';



function App() {
  const [pets, setPets] = useState([]);
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [petAge, setPetAge] = useState('');

  const handleAddPet = (event) => {
    event.preventDefault();
    const newPet = { name: petName, type: petType, age: petAge};
    setPets([...pets, newPet]);
    setPetName('');
    setPetType('');
    setPetAge('');
  };

  const handleDeletePet = (index) => {
    const newPets = [...pets];
    newPets.splice(index, 1);
    setPets(newPets);
  };

  const handleModifyPet = (index, newPet) => {
    const newPets = [...pets];
    newPets[index] = newPet;
    setPets(newPets);
  };

  
  return (
    
    <div class='center'>
      <h1>Pets Page</h1>
      <form onSubmit={handleAddPet}>
        <label>
          Name:
          <input type="text" value={petName} onChange={(event) => setPetName(event.target.value)} required />
        </label>

        <label>
          Type:
          <input type="text" value={petType} onChange={(event) => setPetType(event.target.value)} required />
        </label>

        <label>
          Age:
          <input type="text" value={petAge} onChange={(event) => setPetAge(event.target.value)} required  />
          </label>
          
        <button type="submit">Add Pet</button>
      </form>
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>
            {pet.name} ({pet.type}) {pet.age}
            <button onClick={() => handleDeletePet(index)}>Delete</button>
            <button onClick={() => handleModifyPet(index, {...pet, name: 'New Name' })}>Modify</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
