import React, { useState } from 'react';


function Character({character}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  
    const [showHomeworld, setShowHomeworld] = useState(false);
  
   
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };
    return (
    <div className="character-card" onClick={toggleHomeworld}>
        <h2 className="character-name">{character.name}</h2>{/* Add 
        character-name class */}
        <p>ID: {character.id}</p>
        <p>Date of Birth: {character.birth_year}</p>
        {showHomeworld && <p className="character-planet">Homeworld: {character.homeworld.name}</p>}
        {/* Add character-planet class */}
    </div>
  
    );
  }

export default Character;
