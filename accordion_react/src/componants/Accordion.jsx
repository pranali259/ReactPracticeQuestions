import React, {useState} from 'react';
import AccordionItem from './AccordionItem';
import '../index.css';

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
  return (
    <div className='accordion-container'>
        {items.map((item, index) => (
            <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={activeIndex === index}
                onClick={()=> handleItemClick(index)}
            />
        ))}
    </div>
  )
}

export default Accordion
