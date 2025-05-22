// This is the program to create accordion with out create different component for AccordionItem

import React, { useState } from 'react';
import './index.css'; 

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="accordion-item">
      <button className={`accordion-header ${isOpen ? 'active' : ''}`} onClick={onClick}>
        <h3>{title}</h3>
        <span className={`accordion-icon ${isOpen ? 'rotate' : ''}`}>&#9660;</span> {/* Down arrow character */}
      </button>
      
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

function Accordion({ items }) {
 
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="accordion-container no-items">
        <p>No items available.</p>
      </div>
    );
  }

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;