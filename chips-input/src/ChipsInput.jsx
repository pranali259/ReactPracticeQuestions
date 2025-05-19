import React, { useState } from "react";
import './ChipsInput.css'; // Make sure this import is correct

function ChipsInput() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      // logic to add chips
      setChips(prev => [...prev, inputText.trim()]); // Also trim here
      setInputText("");
      e.preventDefault(); // Prevent default Enter key behavior (like form submission if nested)
    }
  };

  // Updated to use the actual index from map
  const handleDeleteChip = (indexToDelete) => {
    setChips(prev => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    // Use class name for the main container
    <div className="chips-input-container">
      <h2>Chips Input</h2>
      {/* Use class name for the input field */}
      <input
        type="text"
        className="chips-input-field" // Use class name
        placeholder="Type a chip and press Enter" // Updated placeholder text
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {/* Use class name for the chips display area */}
      <div className="chips-display">
        {chips.map((chip, index) => ( // Added index here
          // Use class name for individual chips
          <div key={index} className="chip"> {/* Added key prop */}
            {chip}
            {/* Use class name for the delete button */}
            {/* Pass the actual index to the handler */}
            <button className="remove-chip-btn" onClick={() => handleDeleteChip(index)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;