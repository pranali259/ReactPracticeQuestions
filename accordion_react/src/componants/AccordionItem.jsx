import React from 'react';
import '../index.css';

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className='accordion-item'>
      <button className={`accordion-header ${isOpen ? 'active' : ''}`} onClick={onClick}>
        <h3>{title}</h3>
      </button>
      {isOpen && (<div className='accordion-content'>
        <p>{content}</p>
      </div>
      )}
    </div>
  )
}

export default AccordionItem
